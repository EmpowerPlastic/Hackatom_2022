/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../onestring/params";
import { Thestring } from "../onestring/thestring";

export const protobufPackage = "plasticcreditledger.onestring";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetThestringRequest {}

export interface QueryGetThestringResponse {
  Thestring: Thestring | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetThestringRequest: object = {};

export const QueryGetThestringRequest = {
  encode(
    _: QueryGetThestringRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetThestringRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetThestringRequest,
    } as QueryGetThestringRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetThestringRequest {
    const message = {
      ...baseQueryGetThestringRequest,
    } as QueryGetThestringRequest;
    return message;
  },

  toJSON(_: QueryGetThestringRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetThestringRequest>
  ): QueryGetThestringRequest {
    const message = {
      ...baseQueryGetThestringRequest,
    } as QueryGetThestringRequest;
    return message;
  },
};

const baseQueryGetThestringResponse: object = {};

export const QueryGetThestringResponse = {
  encode(
    message: QueryGetThestringResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.Thestring !== undefined) {
      Thestring.encode(message.Thestring, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetThestringResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetThestringResponse,
    } as QueryGetThestringResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Thestring = Thestring.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetThestringResponse {
    const message = {
      ...baseQueryGetThestringResponse,
    } as QueryGetThestringResponse;
    if (object.Thestring !== undefined && object.Thestring !== null) {
      message.Thestring = Thestring.fromJSON(object.Thestring);
    } else {
      message.Thestring = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetThestringResponse): unknown {
    const obj: any = {};
    message.Thestring !== undefined &&
      (obj.Thestring = message.Thestring
        ? Thestring.toJSON(message.Thestring)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetThestringResponse>
  ): QueryGetThestringResponse {
    const message = {
      ...baseQueryGetThestringResponse,
    } as QueryGetThestringResponse;
    if (object.Thestring !== undefined && object.Thestring !== null) {
      message.Thestring = Thestring.fromPartial(object.Thestring);
    } else {
      message.Thestring = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Thestring by index. */
  Thestring(
    request: QueryGetThestringRequest
  ): Promise<QueryGetThestringResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.onestring.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Thestring(
    request: QueryGetThestringRequest
  ): Promise<QueryGetThestringResponse> {
    const data = QueryGetThestringRequest.encode(request).finish();
    const promise = this.rpc.request(
      "plasticcreditledger.onestring.Query",
      "Thestring",
      data
    );
    return promise.then((data) =>
      QueryGetThestringResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
