export function partitionMediaForGallery(items, secondarySlotCount = 3) {
  const secondary = Array.from({ length: secondarySlotCount }, () => []);

  if (!items.length) {
    return { primary: [], secondary };
  }

  const videos = items.filter((item) => item.type === "video");
  const images = items.filter((item) => item.type === "image");

  let primary;
  let remaining;

  if (videos.length > 0) {
    primary = videos;
    remaining = items.filter((item) => item.type !== "video");
  } else {
    primary = [items[0]];
    remaining = items.slice(1);
  }

  remaining.forEach((item, index) => {
    secondary[index % secondarySlotCount].push(item);
  });

  return { primary, secondary };
}

export function getSlotPlaybackBehavior(items) {
  if (items.length <= 1) {
    return {
      showPager: false,
      advanceMode: "none",
      intervalMs: null,
    };
  }

  if (items[0]?.type === "video") {
    return {
      showPager: true,
      advanceMode: "video-ended",
      intervalMs: null,
    };
  }

  return {
    showPager: true,
    advanceMode: "interval",
    intervalMs: 5000,
  };
}
