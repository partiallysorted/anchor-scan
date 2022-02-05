import {
  Connection,
  PublicKey,
} from "@solana/web3.js";
import emoji from "node-emoji";
import { inflate } from "pako";

import { idlAddress, decodeIdlAccount } from "./idl";

import * as PROGRAMS from "./programs.json"

(async () => {
  const connection = new Connection("https://api.mainnet-beta.solana.com/", "processed");

  for (let programInfo of PROGRAMS.programs) {
    const idlAddr = await idlAddress(new PublicKey(programInfo.programId));
    const accountInfo = await connection.getAccountInfo(idlAddr);
    if (accountInfo) {
      console.log(`${emoji.get('white_check_mark')} ${programInfo.name}`);

      const idlAccount = decodeIdlAccount(accountInfo.data.slice(8));
      const inflatedIdl = inflate(idlAccount.data);
      //console.log(JSON.stringify(JSON.parse(Program.decode(inflatedIdl)), null, 2));
    } else {
      console.log(`${emoji.get('x')} ${programInfo.name}`);
    }
  }
})();
