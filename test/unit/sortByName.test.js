const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    expect(
      sorting.sortByName([
        "Гарри Поттер",
        "Властелин Колец",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order2", () => {
    expect(
      sorting.sortByName([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order3", () => {
    expect(
      sorting.sortByName([
        "Волшебник изумрудного города",
        "Гарри Поттер",
        "Властелин Колец",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ]);
  });
});

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order4", () => {
    expect(
      sorting.sortByName([
        "Властелин Колец",
        "Волшебник изумрудного города",
        "Волшебник изумрудного города",
      ])
    ).toEqual([
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Волшебник изумрудного города",
    ]);
  });

  describe("Books names test suit", () => {
    it("Books names should be sorted in ascending order5", () => {
      expect(
        sorting.sortByName([
          "Гарри Поттер"
        ])
      ).toEqual([
        "Гарри Поттер"
      ]);
    });
  });

});