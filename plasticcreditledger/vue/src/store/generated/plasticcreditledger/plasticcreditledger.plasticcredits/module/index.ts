// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateIssuer } from "./types/plasticcredits/tx";
import { MsgUpdateApprovedCollector } from "./types/plasticcredits/tx";
import { MsgDeleteApprovedCollector } from "./types/plasticcredits/tx";
import { MsgCreateApprovedCollector } from "./types/plasticcredits/tx";
import { MsgUpdateIssuer } from "./types/plasticcredits/tx";
import { MsgDeleteIssuer } from "./types/plasticcredits/tx";


const types = [
  ["/plasticcreditledger.plasticcredits.MsgCreateIssuer", MsgCreateIssuer],
  ["/plasticcreditledger.plasticcredits.MsgUpdateApprovedCollector", MsgUpdateApprovedCollector],
  ["/plasticcreditledger.plasticcredits.MsgDeleteApprovedCollector", MsgDeleteApprovedCollector],
  ["/plasticcreditledger.plasticcredits.MsgCreateApprovedCollector", MsgCreateApprovedCollector],
  ["/plasticcreditledger.plasticcredits.MsgUpdateIssuer", MsgUpdateIssuer],
  ["/plasticcreditledger.plasticcredits.MsgDeleteIssuer", MsgDeleteIssuer],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgCreateIssuer: (data: MsgCreateIssuer): EncodeObject => ({ typeUrl: "/plasticcreditledger.plasticcredits.MsgCreateIssuer", value: MsgCreateIssuer.fromPartial( data ) }),
    msgUpdateApprovedCollector: (data: MsgUpdateApprovedCollector): EncodeObject => ({ typeUrl: "/plasticcreditledger.plasticcredits.MsgUpdateApprovedCollector", value: MsgUpdateApprovedCollector.fromPartial( data ) }),
    msgDeleteApprovedCollector: (data: MsgDeleteApprovedCollector): EncodeObject => ({ typeUrl: "/plasticcreditledger.plasticcredits.MsgDeleteApprovedCollector", value: MsgDeleteApprovedCollector.fromPartial( data ) }),
    msgCreateApprovedCollector: (data: MsgCreateApprovedCollector): EncodeObject => ({ typeUrl: "/plasticcreditledger.plasticcredits.MsgCreateApprovedCollector", value: MsgCreateApprovedCollector.fromPartial( data ) }),
    msgUpdateIssuer: (data: MsgUpdateIssuer): EncodeObject => ({ typeUrl: "/plasticcreditledger.plasticcredits.MsgUpdateIssuer", value: MsgUpdateIssuer.fromPartial( data ) }),
    msgDeleteIssuer: (data: MsgDeleteIssuer): EncodeObject => ({ typeUrl: "/plasticcreditledger.plasticcredits.MsgDeleteIssuer", value: MsgDeleteIssuer.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
