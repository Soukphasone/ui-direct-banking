<template>
  <main class="container mx-auto">
    <div class="text-center mb-6">
      <h2 class="text-2xl font-bold">WELCOME TO LAOVIETBANK DIRECT BANKING</h2>
    </div>
    <div class="text-blue-900 mb-6">Name: Admin</div>

    <!-- Search Section -->
    <div class="flex flex-wrap items-center md:gap-x-6 space-y-4 md:space-y-0">
      <div class="flex items-center space-x-3">
        <label for="account-select" class="font-medium">Account:</label>
        <select id="account-select" class="border rounded px-2 py-1">
          <option value="account1">Account 1</option>
          <option value="account2">Account 2</option>
          <option value="account3">Account 3</option>
        </select>
      </div>
      <div class="flex items-center space-x-3">
        <label for="from-date" class="font-medium">From Date:</label>
        <input type="date" id="from-date" class="border rounded px-2 py-1" />
      </div>
      <div class="flex items-center space-x-3">
        <label for="to-date" class="font-medium">To Date:</label>
        <input type="date" id="to-date" class="border rounded px-2 py-1" />
      </div>
      <div class="flex items-center space-x-3">
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </div>

    <div class="mb-6">Balance:</div>

    <!-- Results Section -->
    <div class="mt-8">
      <h3 class="text-lg font-semibold mb-4">Search Results</h3>
      <div class="border rounded shadow-md p-4 bg-gray-50">
        <!-- Placeholder for dynamic content -->
        <!-- <p class="text-gray-500">
          No results found. Please select a date range and search.
        </p> -->

        <!-- Responsive Table -->
        <!-- <div class="mt-4 overflow-x-auto">
      <table class="table-auto w-full border-collapse border border-gray-300 text-sm sm:text-base">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Date</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Description</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Amount</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Balance</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Amount</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Balance</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Amount</th>
            <th class="border border-gray-300 px-2 sm:px-4 py-2">Balance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">2024-12-10</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">Deposit</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-green-600">+ $1,000</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$5,000</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-green-600">+ $1,000</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$5,000</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-green-600">+ $1,000</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$5,000</td>
          </tr>
          <tr>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">2024-12-12</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">Withdrawal</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-red-600">- $500</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$4,500</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-red-600">- $500</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$4,500</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2 text-red-600">- $500</td>
            <td class="border border-gray-300 px-2 sm:px-4 py-2">$4,500</td>
          </tr>
        </tbody>
      </table>
    </div> -->
          <el-table :data="tableData" style="width: 100%; height: 300px">
            <el-table-column type="selection" width="55"/>
            <el-table-column label="Date" width="120">
              <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column property="name" label="Name" width="120" />
            <el-table-column
              property="address"
              label="use show-overflow-tooltip"
              width="240"
              show-overflow-tooltip
            />
            <el-table-column property="address" label="address" />
          </el-table>
        </div>
      </div>
  </main>
</template>
<script lang="ts" setup>
import { ElTable } from "element-plus";

interface User {
  date: string;
  name: string;
  address: string;
}
const tableData: User[] = [
  {
    date: "2016-05-04",
    name: "Aleyna Kutzner",
    address: "Lohrbergstr. 86c, Süd Lilli, Saarland",
  },
  {
    date: "2016-05-03",
    name: "Helen Jacobi",
    address: "760 A Street, South Frankfield, Illinois",
  },
  {
    date: "2016-05-02",
    name: "Brandon Deckert",
    address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen",
  },
  {
    date: "2016-05-01",
    name: "Margie Smith",
    address: "23618 Windsor Drive, West Ricardoview, Idaho",
  },
];
</script>
