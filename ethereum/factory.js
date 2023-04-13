import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x5bcFdFc5a95D2B8Ab435d856463Ae59e47562184"
);

export default instance;
