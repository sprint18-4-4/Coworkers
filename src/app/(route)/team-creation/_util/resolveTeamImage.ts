export const resolveTeamImageUrl = async (
  file: File | null,
  teamName: string,
  uploadFn: () => Promise<string | null>,
): Promise<string> => {
  if (file) {
    const uploadedUrl = await uploadFn();
    if (uploadedUrl) {
      return uploadedUrl;
    }
  }
  return generateDefaultTeamImage(teamName);
};

export const generateDefaultTeamImage = (teamName: string): string => {
  const seed = encodeURIComponent(teamName);
  return `https://api.dicebear.com/9.x/shapes/svg?seed=${seed}`;
};
