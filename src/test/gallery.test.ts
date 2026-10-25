import { describe, expect, it } from "vitest";

import { galleryItems } from "@/data/gallery";

describe("gallery", () => {
  it("includes all driver documentation photos", () => {
    const driverPhotos = galleryItems.filter(
      (item) =>
        item.category === "Aktivitas Layanan" && item.id.startsWith("driver-documentation-"),
    );

    expect(driverPhotos).toHaveLength(30);
    expect(new Set(driverPhotos.map((item) => item.image)).size).toBe(30);
  });

  it("contains no placeholder or illustration gallery entries", () => {
    expect(
      galleryItems.every(
        (item) =>
          !`${item.id} ${item.title} ${item.alt}`.toLowerCase().match(/placeholder|ilustrasi/),
      ),
    ).toBe(true);
  });

  it("excludes images removed from the gallery", () => {
    const removedImages = ["dest-kota-lama", "dest-ambarawa", "hero-vehicle"];

    expect(galleryItems.map((item) => item.id)).not.toEqual(expect.arrayContaining(removedImages));
  });
});
