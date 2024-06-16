const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

export const getTasks = async () => {
  try {
    const response = await fetch(`${REACT_APP_API_URL}/tasks`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error; // Rethrow to let the caller handle it
  }
};

export const getTask = async (id) => {
  try {
    const response = await fetch(`${REACT_APP_API_URL}/tasks/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching task ${id}:`, error);
    throw error; // Rethrow to let the caller handle it
  }
};

export const createTask = async (task) => {
  console.log("REACT_APP_API_URL", REACT_APP_API_URL);
  try {
    const response = await fetch(`${REACT_APP_API_URL}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error creating task:", error);
    throw error; // Rethrow to let the caller handle it
  }
};

export const updateTask = async (id, task) => {
  try {
    const response = await fetch(`${REACT_APP_API_URL}/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error(`Error updating task ${id}:`, error);
    throw error; // Rethrow to let the caller handle it
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await fetch(`${REACT_APP_API_URL}/tasks/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error(`Error deleting task ${id}:`, error);
    throw error; // Rethrow to let the caller handle it
  }
};
