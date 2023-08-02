import React from "react";
import useSWR from "swr";
import moment from "moment-timezone";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Fixture() {
  const { data, error, isLoading } = useSWR("/api/upcoming", fetcher, {
    refreshInterval: 60000,
    revalidateOnFocus: false,
  });
  if (isLoading)
    return (
      <div className="mt-5 bg-zinc-200 dark:bg-zinc-800 rounded-md animate-pulse p-3"></div>
    );
  if (error) return <div>Error :(</div>;

  const rawDate = data.getData.allFixtures.nextMatch.status.utcTime;
  const getDate = new Date(rawDate);
  const date = moment(getDate).format("LLLL").toLocaleString();
  const finished = data.getData.allFixtures.nextMatch.status.finished;
  const started = data.getData.allFixtures.nextMatch.status.started;
  const cancelled = data.getData.allFixtures.nextMatch.status.cancelled;

  const live =
    finished == false && started == true && cancelled == false ? true : false;

  return (
    <>
      <div className="w-full border mt-5 rounded-lg dark:border-zinc-800 flex flex-col gap-5 p-5 items-center justify-center">
        <p className="font-semibold text-2xl">Upcoming Matches</p>
        <div
          className={`${
            live == true
              ? "bg-emerald-200 px-2 rounded-full text-sm text-emerald-600"
              : ""
          }`}
        >
          {live == true ? (
            <p>
              {" "}
              <span className="animate-pulse">•</span> Live
            </p>
          ) : (
            ""
          )}
        </div>

        <div className="flex gap-2 items-center">
          <img
            src={data.getData.allFixtures.nextMatch.tournament.logo.light}
            height={30}
            width={30}
          />
          <p className="font-semibold">
            {data.getData.allFixtures.nextMatch.tournament.name}
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-5 w-full justify-items-center">
          <div className="border rounded-md px-3 lg:px-10 py-5 gap-5 w-full h-full flex items-center justify-between hover:shadow-md transition dark:border-zinc-800 dark:shadow-zinc-800">
            <p className="font-semibold text-xl truncate">
              {data.getData.allFixtures.nextMatch.home.name}
            </p>
            <img
              src={data.getData.allFixtures.nextMatch.home.logo}
              height={30}
              width={30}
            ></img>
          </div>
          <div className="border rounded-md px-3 lg:px-10 py-5 gap-5 w-full h-full flex flex-row-reverse lg:flex-row items-center justify-between hover:shadow-md transition dark:border-zinc-800 dark:shadow-zinc-800">
            <img
              src={data.getData.allFixtures.nextMatch.away.logo}
              height={30}
              width={30}
            ></img>
            <p className="font-semibold text-xl truncate">
              {data.getData.allFixtures.nextMatch.away.name}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center bg-zinc-100 text-black text-sm dark:text-white dark:bg-zinc-800 px-3 py-1 rounded-full">
          <p>{date}</p>
        </div>
      </div>
    </>
  );
}
