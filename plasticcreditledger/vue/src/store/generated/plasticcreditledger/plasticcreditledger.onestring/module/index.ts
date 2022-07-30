// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreateThestring } from "./types/onestring/tx";
import { MsgUpdateThestring } from "./types/onestring/tx";
import { MsgDeleteThestring } from "./types/onestring/tx";


const types = [
  ["/plasticcreditledger.onestring.MsgCreateThestring", MsgCreateThestring],
  ["/plasticcreditledger.onestring.MsgUpdateThestring", MsgUpdateThestring],
  ["/plasticcreditledger.onestring.MsgDeleteThestring", MsgDeleteThestring],
  
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
    msgCreateThestring: (data: MsgCreateThestring): EncodeObject => ({ typeUrl: "/plasticcreditledger.onestring.MsgCreateThestring", value: MsgCreateThestring.fromPartial( data ) }),
    msgUpdateThestring: (data: MsgUpdateThestring): EncodeObject => ({ typeUrl: "/plasticcreditledger.onestring.MsgUpdateThestring", value: MsgUpdateThestring.fromPartial( data ) }),
    msgDeleteThestring: (data: MsgDeleteThestring): EncodeObject => ({ typeUrl: "/plasticcreditledger.onestring.MsgDeleteThestring", value: MsgDeleteThestring.fromPartial( data ) }),
    
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
