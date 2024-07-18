
"use client";

import { Card } from "flowbite-react";

export function CardList() {
  return (
    <Card className="max-w-sm">
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">List Geojson</h5>
        <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">$320</div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}
