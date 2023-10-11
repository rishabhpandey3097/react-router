export const gitInfoLoader = async () => {
  const response = await fetch(
    "https://api.github.com/users/rishabhpandey3097"
  );
  return response.json();
};
