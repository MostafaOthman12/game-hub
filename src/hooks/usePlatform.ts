import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  return usePlatforms().data?.results.find((p) => p.id === id);
};

export default usePlatform;
