import styled from "styled-components";

export const CardListTableContainer = styled.div`
  width: 100%;
  max-height: calc(100vh - 375px);
  overflow-y: auto;
  overflow-x: auto;
  border-radius: 5px;
  position: relative; /* Ensures sticky positioning works */

  /* Custom Scrollbar */
  &::-webkit-scrollbar {
    width: 10px; /* Adjust width for vertical scrollbar */
    height: 10px; /* Adjust height for horizontal scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: #ffe9db; /* Light peach background */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #787473; /* Darker peach */
    border-radius: 10px;
    border: 2px solid #ffe9db; /* Space around the thumb */
    transition:
      background 0.3s ease-in-out,
      border 0.3s ease-in-out; /* Smooth transition */
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #3a3836; /* Darker color on hover */
  }

  table {
    width: 100%;
    table-layout: fixed;
    border-collapse: separate;
    border-spacing: 0;
    border: none;
  }

  thead {
    position: sticky;
    top: 0;
    background: white; /* Keeps the header visible */
    z-index: 1; /* Higher z-index ensures it stays above scrolling content */
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: solid 1px #514b4b;
  }

  th {
    background: #ffd3b8;
  }

  th:not(:first-child),
  td:not(:first-child) {
    border-left: 1px solid #514b4b;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  tbody {
    background-color: #ffe9db;
  }

  th:nth-child(1),
  td:nth-child(1) {
    width: 42px; /* Checkbox column */
  }

  label {
    padding: 0;
    margin-right: 25px;
    margin-bottom: 25px;
  }

  /* Media query for smaller screens */
  @media (max-width: 768px) {
    table {
      width: 768px;
    }

    th,
    td {
      padding: 6px; /* Optional: Reduce padding on smaller screens */
    }

    th:nth-child(1),
    td:nth-child(1) {
      width: 36px; /* Optional: Adjust column width for smaller screens */
    }
  }
`;

export const CardListTopSection = styled.div`
  margin-bottom: 45px;
`;
