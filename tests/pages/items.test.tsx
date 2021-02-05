import { getPage } from "next-page-tester";
import { screen, fireEvent } from "@testing-library/react";

describe("Blog page", () => {
  it("renders blog page", async () => {
    const { render } = await getPage({
      route: "/items/1",
    });

    render();

    // expect(screen.getByText("Blog")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Link"));
    await screen.findByText("Linked page");
  });
});
