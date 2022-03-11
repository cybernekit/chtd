// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgUpdateAdmin } from "./types/cht/tx";
import { MsgStoreCode } from "./types/cht/tx";
import { MsgMigrateContract } from "./types/cht/tx";
import { MsgExecuteContract } from "./types/cht/tx";
import { MsgIBCSend } from "./types/cht/ibc";
import { MsgInstantiateContract } from "./types/cht/tx";
import { MsgClearAdmin } from "./types/cht/tx";
import { MsgIBCCloseChannel } from "./types/cht/ibc";


const types = [
  ["/ChronicToken.cht.cht.MsgUpdateAdmin", MsgUpdateAdmin],
  ["/ChronicToken.cht.cht.MsgStoreCode", MsgStoreCode],
  ["/ChronicToken.cht.cht.MsgMigrateContract", MsgMigrateContract],
  ["/ChronicToken.cht.cht.MsgExecuteContract", MsgExecuteContract],
  ["/ChronicToken.cht.cht.MsgIBCSend", MsgIBCSend],
  ["/ChronicToken.cht.cht.MsgInstantiateContract", MsgInstantiateContract],
  ["/ChronicToken.cht.cht.MsgClearAdmin", MsgClearAdmin],
  ["/ChronicToken.cht.cht.MsgIBCCloseChannel", MsgIBCCloseChannel],
  
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
    msgUpdateAdmin: (data: MsgUpdateAdmin): EncodeObject => ({ typeUrl: "/ChronicToken.cht.cht.MsgUpdateAdmin", value: MsgUpdateAdmin.fromPartial( data ) }),
    msgStoreCode: (data: MsgStoreCode): EncodeObject => ({ typeUrl: "/ChronicToken.cht.cht.MsgStoreCode", value: MsgStoreCode.fromPartial( data ) }),
    msgMigrateContract: (data: MsgMigrateContract): EncodeObject => ({ typeUrl: "/ChronicToken.cht.cht.MsgMigrateContract", value: MsgMigrateContract.fromPartial( data ) }),
    msgExecuteContract: (data: MsgExecuteContract): EncodeObject => ({ typeUrl: "/ChronicToken.cht.cht.MsgExecuteContract", value: MsgExecuteContract.fromPartial( data ) }),
    msgIBCSend: (data: MsgIBCSend): EncodeObject => ({ typeUrl: "/ChronicToken.cht.cht.MsgIBCSend", value: MsgIBCSend.fromPartial( data ) }),
    msgInstantiateContract: (data: MsgInstantiateContract): EncodeObject => ({ typeUrl: "/ChronicToken.cht.cht.MsgInstantiateContract", value: MsgInstantiateContract.fromPartial( data ) }),
    msgClearAdmin: (data: MsgClearAdmin): EncodeObject => ({ typeUrl: "/ChronicToken.cht.cht.MsgClearAdmin", value: MsgClearAdmin.fromPartial( data ) }),
    msgIBCCloseChannel: (data: MsgIBCCloseChannel): EncodeObject => ({ typeUrl: "/ChronicToken.cht.cht.MsgIBCCloseChannel", value: MsgIBCCloseChannel.fromPartial( data ) }),
    
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
