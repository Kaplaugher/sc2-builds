import React from "react";
import { api } from "../utils/api";
import { useState } from "react";
import { useRouter } from "next/router";
import { type NextPage } from "next";

const SubmitBuildPage: NextPage = () => {
  const createBuildMutation = api.builds.createBuild.useMutation();
  console.log(createBuildMutation, "mutation");
  const [build, setBuildOrder] = useState("");
  const [matchUp, setMatchUp] = useState("ZvT");

  const router = useRouter();

  async function handleSubmitBuildOrder(e: React.FormEvent) {
    e.preventDefault();
    await createBuildMutation.mutateAsync({
      matchUp,
      build,
    });
    void router.push("/builds");
  }
  return (
    <div>
      {" "}
      <main className="flex min-h-screen  bg-gradient-to-b from-[#2e026d] to-[#15162c]  text-white">
        <div className="mx-auto">
          <form
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmitBuildOrder}
            className="flex h-full flex-col items-center justify-center gap-4"
          >
            <h1>Submit a build order</h1>
            <label htmlFor="match-up-select">Match Up</label>
            <select
              id="match-up-select"
              value={matchUp}
              required
              onChange={(e) => setMatchUp(e.target.value)}
              className="p-2 text-black"
            >
              <option value="zvt">ZvT</option>
              <option value="zvp">ZvP</option>
              <option value="zvz">ZvZ</option>

              <option value="pvt">PvT</option>
              <option value="pvp">PvP</option>
              <option value="pvz">PvZ</option>

              <option value="tvt">TvT</option>
              <option value="tvp">TvP</option>
              <option value="tvz">TvZ</option>
            </select>
            <textarea
              className="p-2 text-black"
              value={build}
              onChange={(e) => setBuildOrder(e.target.value)}
            ></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default SubmitBuildPage;
