export const getFeedBack = async () => {
  const response = await (
    await fetch("feedback_data.json")
  ).json();

  if (response) {
    return response;
  }
};
