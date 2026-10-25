import { describe, expect, it } from "vitest";

import { vehicleCategories, vehicles } from "@/data/vehicles";

describe("vehicle fleet", () => {
  it("lists the owner-provided models in the correct categories", () => {
    const modelsByCategory = Object.fromEntries(
      vehicleCategories.map(({ id }) => [
        id,
        vehicles.filter((vehicle) => vehicle.category === id).map((vehicle) => vehicle.name),
      ]),
    );

    expect(modelsByCategory).toEqual({
      "city-car": ["New Agya CVT", "New Brio AT"],
      "regular-car-mpv": [
        "Avanza Veloz Manual",
        "New Avanza CVT",
        "New Xenia CVT",
        "New Veloz Hybrid",
        "New XL 7 AT",
        "New Xpander CVT",
        "Innova Reborn Diesel",
      ],
      "premium-suv": [
        "Innova Venturer",
        "Innova Zenix G HEV",
        "Innova Zenix V HEV",
        "Innova Zenix Q HEV",
        "Fortuner GR",
        "Fortuner Legender",
        "Pajero Sport Dakar",
        "New Camry",
        "Alphard Facelift",
        "New Alphard HEV",
        "New Denza D9 EV",
        "Landcruiser 300 VX-R",
        "BYD M6 PHEV",
        "Hiace Premio Luxury 9 Seat",
        "Mercedes Benz Sprinter",
      ],
      "shuttle-car": [
        "Hiace Commuter 15 Seat",
        "Hiace Premio 14 Seat",
        "Elf Long 19 Seat",
        "Bus Medium 35 Seat",
        "Bigbus 50 Seat",
      ],
    });
  });

  it("has a photo and descriptive alt text for every listed vehicle", () => {
    expect(vehicles).toHaveLength(29);
    expect(vehicles.every((vehicle) => vehicle.image.length > 0)).toBe(true);
    expect(vehicles.every((vehicle) => vehicle.imageAlt.length > 0)).toBe(true);
    expect(
      vehicles.every((vehicle) => !vehicle.imageAlt.toLowerCase().includes("placeholder")),
    ).toBe(true);
    expect(vehicles.every((vehicle) => vehicle.imageScale && vehicle.imageScale >= 1)).toBe(true);
  });
});
