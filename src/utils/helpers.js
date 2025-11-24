const statusMap = {
  OPEN: "Open",
  IN_PROGRESS: "In Progress",
  RESOLVED: "Resolved",
  CLOSED: "Closed",
};

const priorityMap = {
  CRITICAL: "🔴 1 - Critical",
  HIGH: "🟠 2 - High",
  MODERATE: "🟡 3 - Medium",
  LOW: "🔵 4 - Low",
};

const formatPriority = (value) => priorityMap[value] ?? "(unknown)";

const formatStatus = (value) => statusMap[value] ?? "(unknown)";

const formatDate = (value) => {
  return new Date (value).toLocaleString();
}

const getNestedValue = (obj, path) => {
  const value = path
    .split(".")
    .reduce((value, key) => (value ? value[key] : undefined), obj);
  return value !== undefined && value !== null ? value : "(empty)";
};

export {formatPriority, formatStatus, formatDate, getNestedValue}