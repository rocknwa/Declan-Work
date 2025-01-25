import React from "react";
import "./style.css";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export const PostJob = () => {
  return (
    <div id="webcrumbs">
      <div className="w-full bg-white shadow rounded-lg p-6">
        {" "}
        <h1 className="font-title text-2xl text-neutral-950 mb-4">
          Post a Job
        </h1>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="job-title"
              className="block text-sm font-semibold text-neutral-950 mb-2"
            >
              Job Title
            </label>
            <input
              type="text"
              id="job-title"
              className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter job title"
            />
          </div>
          <div>
            <label
              htmlFor="job-description"
              className="block text-sm font-semibold text-neutral-950 mb-2"
            >
              Job Description
            </label>
            <textarea
              id="job-description"
              rows="4"
              className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Provide a clear and detailed job description"
            ></textarea>
          </div>
          <div>
            <label
              htmlFor="job-category"
              className="block text-sm font-semibold text-neutral-950 mb-2"
            >
              Category
            </label>
            <select
              id="job-category"
              className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option value="web-development">Web Development</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="content-writing">Content Writing</option>
              <option value="data-entry">Data Entry</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="budget"
              className="block text-sm font-semibold text-neutral-950 mb-2"
            >
              Budget
            </label>
            <input
              type="number"
              id="budget"
              className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Enter your budget"
            />
          </div>
          <div>
            <label
              htmlFor="deadline"
              className="block text-sm font-semibold text-neutral-950 mb-2"
            >
              Deadline
            </label>
            <input
              type="date"
              id="deadline"
              className="w-full p-3 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-primary-500 text-white px-6 py-2 rounded-md hover:bg-primary-600"
            >
              Submit
            </button>

            <ConnectButton
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
