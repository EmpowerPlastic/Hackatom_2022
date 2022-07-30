/* eslint-disable */
import { Params } from "../plasticcredits/params";
import { Issuer } from "../plasticcredits/issuer";
import { ApprovedCollector } from "../plasticcredits/approved_collector";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "plasticcreditledger.plasticcredits";

/** GenesisState defines the plasticcredits module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  port_id: string;
  issuerList: Issuer[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  approvedCollectorList: ApprovedCollector[];
}

const baseGenesisState: object = { port_id: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.port_id !== "") {
      writer.uint32(18).string(message.port_id);
    }
    for (const v of message.issuerList) {
      Issuer.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.approvedCollectorList) {
      ApprovedCollector.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.issuerList = [];
    message.approvedCollectorList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.port_id = reader.string();
          break;
        case 3:
          message.issuerList.push(Issuer.decode(reader, reader.uint32()));
          break;
        case 4:
          message.approvedCollectorList.push(
            ApprovedCollector.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.issuerList = [];
    message.approvedCollectorList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = String(object.port_id);
    } else {
      message.port_id = "";
    }
    if (object.issuerList !== undefined && object.issuerList !== null) {
      for (const e of object.issuerList) {
        message.issuerList.push(Issuer.fromJSON(e));
      }
    }
    if (
      object.approvedCollectorList !== undefined &&
      object.approvedCollectorList !== null
    ) {
      for (const e of object.approvedCollectorList) {
        message.approvedCollectorList.push(ApprovedCollector.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.port_id !== undefined && (obj.port_id = message.port_id);
    if (message.issuerList) {
      obj.issuerList = message.issuerList.map((e) =>
        e ? Issuer.toJSON(e) : undefined
      );
    } else {
      obj.issuerList = [];
    }
    if (message.approvedCollectorList) {
      obj.approvedCollectorList = message.approvedCollectorList.map((e) =>
        e ? ApprovedCollector.toJSON(e) : undefined
      );
    } else {
      obj.approvedCollectorList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.issuerList = [];
    message.approvedCollectorList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.port_id !== undefined && object.port_id !== null) {
      message.port_id = object.port_id;
    } else {
      message.port_id = "";
    }
    if (object.issuerList !== undefined && object.issuerList !== null) {
      for (const e of object.issuerList) {
        message.issuerList.push(Issuer.fromPartial(e));
      }
    }
    if (
      object.approvedCollectorList !== undefined &&
      object.approvedCollectorList !== null
    ) {
      for (const e of object.approvedCollectorList) {
        message.approvedCollectorList.push(ApprovedCollector.fromPartial(e));
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
