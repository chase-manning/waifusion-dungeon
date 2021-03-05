import React from "react";
import {
  Input,
  Blockie,
  Card,
  Flex,
  Heading,
  Button,
  Text,
  Box,
  Select,
  Field,
  Modal,
  width,
} from "rimble-ui";

import Layout from "../components/layout";
import SEO from "../components/seo";
import OverviewGreenBar from "../images/overview_green_bar.png";
import { GLOBALS } from "../app/utils/globals.js";

const ProvenancePage = () => (
  <Layout>
    <SEO title="Provenance" />
    <Box className="waifu-card-box overview-card-box">
      <div className="box-upper">
        <img src={OverviewGreenBar} className="waifu-card-box-greenbar" />
        <Box
          className="waifu-card-box-sub"
          color="white"
          style={{ maxWidth: 1424, marginBottom: 1 }}
        >
          <center className="waifu-card-box-center">
            <div class="waifu-card-header-text">The Maid Cafe</div>
            <div className="waifu-card-text waifu-about-text">
              Many of your beloved waifus are working in The Maid Cafe. Come for
              a drink and enjoy the show! Take a Waifu home buy buying her, or
              by burning one of your current Waifus with WET.
            </div>
          </center>
        </Box>
      </div>
    </Box>
  </Layout>
);

export default ProvenancePage;
