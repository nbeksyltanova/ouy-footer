import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import Cart from "./pages/Cart";
import ProductViewModal from "./components/ProductViewModal";
export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      className="demo"
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
    >
      <Cart />
    </Box>
  );

  return (
    <div className="cartt">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="y" onClick={toggleDrawer(anchor, true)}>
            {anchor}
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
