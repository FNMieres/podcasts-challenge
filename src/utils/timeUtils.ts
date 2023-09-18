export const millisecondsToDuration = (milliseconds: number) => {
  const isNegative = milliseconds < 0;
  const absMilliseconds = Math.abs(milliseconds);

  const seconds = Math.floor((absMilliseconds / 1000) % 60);
  const minutes = Math.floor((absMilliseconds / (1000 * 60)) % 60);
  const hours = Math.floor(absMilliseconds / (1000 * 60 * 60));

  const minutesStr = minutes < 10 ? `0${minutes}` : `${minutes}`;
  const secondsStr = seconds < 10 ? `0${seconds}` : `${seconds}`;

  const duration =
    hours > 0
      ? `${hours}:${minutesStr}:${secondsStr}`
      : `${minutesStr}:${secondsStr}`;

  return isNegative ? `-${duration}` : duration;
};

export const millisecondsToSeconds = (milliseconds: number) =>
  milliseconds / 1000;
