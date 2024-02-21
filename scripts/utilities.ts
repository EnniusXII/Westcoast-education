const convertFormDataToJson = (formData: FormData): Record<string, any> => {
  const data: Record<string, any> = Object.fromEntries(formData.entries());

  return data;
};

export { convertFormDataToJson };
