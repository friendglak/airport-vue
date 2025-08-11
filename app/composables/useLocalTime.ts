export const useLocalTime = () => {
  const formatTime = (gmtOffset: string, timezone: string): string => {
    try {
      const now = new Date();
      const gmtOffsetHours = parseInt(gmtOffset);

      // Create a new date with GMT offset
      const localTime = new Date(
        now.getTime() + gmtOffsetHours * 60 * 60 * 1000
      );

      return localTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: timezone,
      });
    } catch (error) {
      console.error("Error formatting time:", error);
      return "N/A";
    }
  };

  const getCurrentTime = (gmtOffset: string, timezone: string): string => {
    return formatTime(gmtOffset, timezone);
  };

  const getTimeDifference = (
    gmtOffset1: string,
    gmtOffset2: string
  ): number => {
    try {
      const offset1 = parseInt(gmtOffset1);
      const offset2 = parseInt(gmtOffset2);
      return Math.abs(offset1 - offset2);
    } catch (error) {
      console.error("Error calculating time difference:", error);
      return 0;
    }
  };

  const formatTimeDifference = (hours: number): string => {
    if (hours === 0) return "Same time";
    if (hours === 1) return "1 hour";
    return `${hours} hours`;
  };

  return {
    formatTime,
    getCurrentTime,
    getTimeDifference,
    formatTimeDifference,
  };
};
