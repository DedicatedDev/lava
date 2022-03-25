/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Params } from "../servicer/params";
import { StakeMap } from "../servicer/stake_map";
import { PageRequest, PageResponse, } from "../cosmos/base/query/v1beta1/pagination";
import { SpecStakeStorage } from "../servicer/spec_stake_storage";
import { StakeStorage } from "../servicer/stake_storage";
import { BlockDeadlineForCallback } from "../servicer/block_deadline_for_callback";
import { UnstakingServicersAllSpecs } from "../servicer/unstaking_servicers_all_specs";
import { CurrentSessionStart } from "../servicer/current_session_start";
import { PreviousSessionBlocks } from "../servicer/previous_session_blocks";
import { SessionStorageForSpec } from "../servicer/session_storage_for_spec";
import { EarliestSessionStart } from "../servicer/earliest_session_start";
export const protobufPackage = "lavanet.lava.servicer";
const baseQueryParamsRequest = {};
export const QueryParamsRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsRequest };
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
    fromJSON(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = { ...baseQueryParamsRequest };
        return message;
    },
};
const baseQueryParamsResponse = {};
export const QueryParamsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryParamsResponse };
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
    fromJSON(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromJSON(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryParamsResponse };
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromPartial(object.params);
        }
        else {
            message.params = undefined;
        }
        return message;
    },
};
const baseQueryGetStakeMapRequest = { index: "" };
export const QueryGetStakeMapRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetStakeMapRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetStakeMapRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetStakeMapRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetStakeMapResponse = {};
export const QueryGetStakeMapResponse = {
    encode(message, writer = Writer.create()) {
        if (message.stakeMap !== undefined) {
            StakeMap.encode(message.stakeMap, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetStakeMapResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakeMap = StakeMap.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetStakeMapResponse,
        };
        if (object.stakeMap !== undefined && object.stakeMap !== null) {
            message.stakeMap = StakeMap.fromJSON(object.stakeMap);
        }
        else {
            message.stakeMap = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.stakeMap !== undefined &&
            (obj.stakeMap = message.stakeMap
                ? StakeMap.toJSON(message.stakeMap)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetStakeMapResponse,
        };
        if (object.stakeMap !== undefined && object.stakeMap !== null) {
            message.stakeMap = StakeMap.fromPartial(object.stakeMap);
        }
        else {
            message.stakeMap = undefined;
        }
        return message;
    },
};
const baseQueryAllStakeMapRequest = {};
export const QueryAllStakeMapRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllStakeMapRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllStakeMapRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllStakeMapRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllStakeMapResponse = {};
export const QueryAllStakeMapResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.stakeMap) {
            StakeMap.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllStakeMapResponse,
        };
        message.stakeMap = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakeMap.push(StakeMap.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllStakeMapResponse,
        };
        message.stakeMap = [];
        if (object.stakeMap !== undefined && object.stakeMap !== null) {
            for (const e of object.stakeMap) {
                message.stakeMap.push(StakeMap.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.stakeMap) {
            obj.stakeMap = message.stakeMap.map((e) => e ? StakeMap.toJSON(e) : undefined);
        }
        else {
            obj.stakeMap = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllStakeMapResponse,
        };
        message.stakeMap = [];
        if (object.stakeMap !== undefined && object.stakeMap !== null) {
            for (const e of object.stakeMap) {
                message.stakeMap.push(StakeMap.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetSpecStakeStorageRequest = { index: "" };
export const QueryGetSpecStakeStorageRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSpecStakeStorageRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetSpecStakeStorageRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSpecStakeStorageRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetSpecStakeStorageResponse = {};
export const QueryGetSpecStakeStorageResponse = {
    encode(message, writer = Writer.create()) {
        if (message.specStakeStorage !== undefined) {
            SpecStakeStorage.encode(message.specStakeStorage, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSpecStakeStorageResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.specStakeStorage = SpecStakeStorage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetSpecStakeStorageResponse,
        };
        if (object.specStakeStorage !== undefined &&
            object.specStakeStorage !== null) {
            message.specStakeStorage = SpecStakeStorage.fromJSON(object.specStakeStorage);
        }
        else {
            message.specStakeStorage = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.specStakeStorage !== undefined &&
            (obj.specStakeStorage = message.specStakeStorage
                ? SpecStakeStorage.toJSON(message.specStakeStorage)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSpecStakeStorageResponse,
        };
        if (object.specStakeStorage !== undefined &&
            object.specStakeStorage !== null) {
            message.specStakeStorage = SpecStakeStorage.fromPartial(object.specStakeStorage);
        }
        else {
            message.specStakeStorage = undefined;
        }
        return message;
    },
};
const baseQueryAllSpecStakeStorageRequest = {};
export const QueryAllSpecStakeStorageRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSpecStakeStorageRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSpecStakeStorageRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSpecStakeStorageRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllSpecStakeStorageResponse = {};
export const QueryAllSpecStakeStorageResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.specStakeStorage) {
            SpecStakeStorage.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSpecStakeStorageResponse,
        };
        message.specStakeStorage = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.specStakeStorage.push(SpecStakeStorage.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSpecStakeStorageResponse,
        };
        message.specStakeStorage = [];
        if (object.specStakeStorage !== undefined &&
            object.specStakeStorage !== null) {
            for (const e of object.specStakeStorage) {
                message.specStakeStorage.push(SpecStakeStorage.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.specStakeStorage) {
            obj.specStakeStorage = message.specStakeStorage.map((e) => e ? SpecStakeStorage.toJSON(e) : undefined);
        }
        else {
            obj.specStakeStorage = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSpecStakeStorageResponse,
        };
        message.specStakeStorage = [];
        if (object.specStakeStorage !== undefined &&
            object.specStakeStorage !== null) {
            for (const e of object.specStakeStorage) {
                message.specStakeStorage.push(SpecStakeStorage.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryStakedServicersRequest = { specName: "" };
export const QueryStakedServicersRequest = {
    encode(message, writer = Writer.create()) {
        if (message.specName !== "") {
            writer.uint32(10).string(message.specName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryStakedServicersRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.specName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryStakedServicersRequest,
        };
        if (object.specName !== undefined && object.specName !== null) {
            message.specName = String(object.specName);
        }
        else {
            message.specName = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.specName !== undefined && (obj.specName = message.specName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryStakedServicersRequest,
        };
        if (object.specName !== undefined && object.specName !== null) {
            message.specName = object.specName;
        }
        else {
            message.specName = "";
        }
        return message;
    },
};
const baseQueryStakedServicersResponse = { output: "" };
export const QueryStakedServicersResponse = {
    encode(message, writer = Writer.create()) {
        if (message.stakeStorage !== undefined) {
            StakeStorage.encode(message.stakeStorage, writer.uint32(10).fork()).ldelim();
        }
        if (message.output !== "") {
            writer.uint32(18).string(message.output);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryStakedServicersResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.stakeStorage = StakeStorage.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.output = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryStakedServicersResponse,
        };
        if (object.stakeStorage !== undefined && object.stakeStorage !== null) {
            message.stakeStorage = StakeStorage.fromJSON(object.stakeStorage);
        }
        else {
            message.stakeStorage = undefined;
        }
        if (object.output !== undefined && object.output !== null) {
            message.output = String(object.output);
        }
        else {
            message.output = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.stakeStorage !== undefined &&
            (obj.stakeStorage = message.stakeStorage
                ? StakeStorage.toJSON(message.stakeStorage)
                : undefined);
        message.output !== undefined && (obj.output = message.output);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryStakedServicersResponse,
        };
        if (object.stakeStorage !== undefined && object.stakeStorage !== null) {
            message.stakeStorage = StakeStorage.fromPartial(object.stakeStorage);
        }
        else {
            message.stakeStorage = undefined;
        }
        if (object.output !== undefined && object.output !== null) {
            message.output = object.output;
        }
        else {
            message.output = "";
        }
        return message;
    },
};
const baseQueryGetBlockDeadlineForCallbackRequest = {};
export const QueryGetBlockDeadlineForCallbackRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetBlockDeadlineForCallbackRequest,
        };
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
    fromJSON(_) {
        const message = {
            ...baseQueryGetBlockDeadlineForCallbackRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryGetBlockDeadlineForCallbackRequest,
        };
        return message;
    },
};
const baseQueryGetBlockDeadlineForCallbackResponse = {};
export const QueryGetBlockDeadlineForCallbackResponse = {
    encode(message, writer = Writer.create()) {
        if (message.BlockDeadlineForCallback !== undefined) {
            BlockDeadlineForCallback.encode(message.BlockDeadlineForCallback, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetBlockDeadlineForCallbackResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.BlockDeadlineForCallback = BlockDeadlineForCallback.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetBlockDeadlineForCallbackResponse,
        };
        if (object.BlockDeadlineForCallback !== undefined &&
            object.BlockDeadlineForCallback !== null) {
            message.BlockDeadlineForCallback = BlockDeadlineForCallback.fromJSON(object.BlockDeadlineForCallback);
        }
        else {
            message.BlockDeadlineForCallback = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.BlockDeadlineForCallback !== undefined &&
            (obj.BlockDeadlineForCallback = message.BlockDeadlineForCallback
                ? BlockDeadlineForCallback.toJSON(message.BlockDeadlineForCallback)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetBlockDeadlineForCallbackResponse,
        };
        if (object.BlockDeadlineForCallback !== undefined &&
            object.BlockDeadlineForCallback !== null) {
            message.BlockDeadlineForCallback = BlockDeadlineForCallback.fromPartial(object.BlockDeadlineForCallback);
        }
        else {
            message.BlockDeadlineForCallback = undefined;
        }
        return message;
    },
};
const baseQueryGetUnstakingServicersAllSpecsRequest = { id: 0 };
export const QueryGetUnstakingServicersAllSpecsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint64(message.id);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetUnstakingServicersAllSpecsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetUnstakingServicersAllSpecsRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = Number(object.id);
        }
        else {
            message.id = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetUnstakingServicersAllSpecsRequest,
        };
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = 0;
        }
        return message;
    },
};
const baseQueryGetUnstakingServicersAllSpecsResponse = {};
export const QueryGetUnstakingServicersAllSpecsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.UnstakingServicersAllSpecs !== undefined) {
            UnstakingServicersAllSpecs.encode(message.UnstakingServicersAllSpecs, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetUnstakingServicersAllSpecsResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.UnstakingServicersAllSpecs = UnstakingServicersAllSpecs.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetUnstakingServicersAllSpecsResponse,
        };
        if (object.UnstakingServicersAllSpecs !== undefined &&
            object.UnstakingServicersAllSpecs !== null) {
            message.UnstakingServicersAllSpecs = UnstakingServicersAllSpecs.fromJSON(object.UnstakingServicersAllSpecs);
        }
        else {
            message.UnstakingServicersAllSpecs = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.UnstakingServicersAllSpecs !== undefined &&
            (obj.UnstakingServicersAllSpecs = message.UnstakingServicersAllSpecs
                ? UnstakingServicersAllSpecs.toJSON(message.UnstakingServicersAllSpecs)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetUnstakingServicersAllSpecsResponse,
        };
        if (object.UnstakingServicersAllSpecs !== undefined &&
            object.UnstakingServicersAllSpecs !== null) {
            message.UnstakingServicersAllSpecs = UnstakingServicersAllSpecs.fromPartial(object.UnstakingServicersAllSpecs);
        }
        else {
            message.UnstakingServicersAllSpecs = undefined;
        }
        return message;
    },
};
const baseQueryAllUnstakingServicersAllSpecsRequest = {};
export const QueryAllUnstakingServicersAllSpecsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllUnstakingServicersAllSpecsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllUnstakingServicersAllSpecsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllUnstakingServicersAllSpecsRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllUnstakingServicersAllSpecsResponse = {};
export const QueryAllUnstakingServicersAllSpecsResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.UnstakingServicersAllSpecs) {
            UnstakingServicersAllSpecs.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllUnstakingServicersAllSpecsResponse,
        };
        message.UnstakingServicersAllSpecs = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.UnstakingServicersAllSpecs.push(UnstakingServicersAllSpecs.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllUnstakingServicersAllSpecsResponse,
        };
        message.UnstakingServicersAllSpecs = [];
        if (object.UnstakingServicersAllSpecs !== undefined &&
            object.UnstakingServicersAllSpecs !== null) {
            for (const e of object.UnstakingServicersAllSpecs) {
                message.UnstakingServicersAllSpecs.push(UnstakingServicersAllSpecs.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.UnstakingServicersAllSpecs) {
            obj.UnstakingServicersAllSpecs = message.UnstakingServicersAllSpecs.map((e) => (e ? UnstakingServicersAllSpecs.toJSON(e) : undefined));
        }
        else {
            obj.UnstakingServicersAllSpecs = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllUnstakingServicersAllSpecsResponse,
        };
        message.UnstakingServicersAllSpecs = [];
        if (object.UnstakingServicersAllSpecs !== undefined &&
            object.UnstakingServicersAllSpecs !== null) {
            for (const e of object.UnstakingServicersAllSpecs) {
                message.UnstakingServicersAllSpecs.push(UnstakingServicersAllSpecs.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryGetPairingRequest = { specName: "", userAddr: "" };
export const QueryGetPairingRequest = {
    encode(message, writer = Writer.create()) {
        if (message.specName !== "") {
            writer.uint32(10).string(message.specName);
        }
        if (message.userAddr !== "") {
            writer.uint32(18).string(message.userAddr);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseQueryGetPairingRequest };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.specName = reader.string();
                    break;
                case 2:
                    message.userAddr = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseQueryGetPairingRequest };
        if (object.specName !== undefined && object.specName !== null) {
            message.specName = String(object.specName);
        }
        else {
            message.specName = "";
        }
        if (object.userAddr !== undefined && object.userAddr !== null) {
            message.userAddr = String(object.userAddr);
        }
        else {
            message.userAddr = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.specName !== undefined && (obj.specName = message.specName);
        message.userAddr !== undefined && (obj.userAddr = message.userAddr);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseQueryGetPairingRequest };
        if (object.specName !== undefined && object.specName !== null) {
            message.specName = object.specName;
        }
        else {
            message.specName = "";
        }
        if (object.userAddr !== undefined && object.userAddr !== null) {
            message.userAddr = object.userAddr;
        }
        else {
            message.userAddr = "";
        }
        return message;
    },
};
const baseQueryGetPairingResponse = {};
export const QueryGetPairingResponse = {
    encode(message, writer = Writer.create()) {
        if (message.servicers !== undefined) {
            StakeStorage.encode(message.servicers, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPairingResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.servicers = StakeStorage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetPairingResponse,
        };
        if (object.servicers !== undefined && object.servicers !== null) {
            message.servicers = StakeStorage.fromJSON(object.servicers);
        }
        else {
            message.servicers = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.servicers !== undefined &&
            (obj.servicers = message.servicers
                ? StakeStorage.toJSON(message.servicers)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPairingResponse,
        };
        if (object.servicers !== undefined && object.servicers !== null) {
            message.servicers = StakeStorage.fromPartial(object.servicers);
        }
        else {
            message.servicers = undefined;
        }
        return message;
    },
};
const baseQueryGetCurrentSessionStartRequest = {};
export const QueryGetCurrentSessionStartRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetCurrentSessionStartRequest,
        };
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
    fromJSON(_) {
        const message = {
            ...baseQueryGetCurrentSessionStartRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryGetCurrentSessionStartRequest,
        };
        return message;
    },
};
const baseQueryGetCurrentSessionStartResponse = {};
export const QueryGetCurrentSessionStartResponse = {
    encode(message, writer = Writer.create()) {
        if (message.CurrentSessionStart !== undefined) {
            CurrentSessionStart.encode(message.CurrentSessionStart, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetCurrentSessionStartResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.CurrentSessionStart = CurrentSessionStart.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetCurrentSessionStartResponse,
        };
        if (object.CurrentSessionStart !== undefined &&
            object.CurrentSessionStart !== null) {
            message.CurrentSessionStart = CurrentSessionStart.fromJSON(object.CurrentSessionStart);
        }
        else {
            message.CurrentSessionStart = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.CurrentSessionStart !== undefined &&
            (obj.CurrentSessionStart = message.CurrentSessionStart
                ? CurrentSessionStart.toJSON(message.CurrentSessionStart)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetCurrentSessionStartResponse,
        };
        if (object.CurrentSessionStart !== undefined &&
            object.CurrentSessionStart !== null) {
            message.CurrentSessionStart = CurrentSessionStart.fromPartial(object.CurrentSessionStart);
        }
        else {
            message.CurrentSessionStart = undefined;
        }
        return message;
    },
};
const baseQueryGetPreviousSessionBlocksRequest = {};
export const QueryGetPreviousSessionBlocksRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPreviousSessionBlocksRequest,
        };
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
    fromJSON(_) {
        const message = {
            ...baseQueryGetPreviousSessionBlocksRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryGetPreviousSessionBlocksRequest,
        };
        return message;
    },
};
const baseQueryGetPreviousSessionBlocksResponse = {};
export const QueryGetPreviousSessionBlocksResponse = {
    encode(message, writer = Writer.create()) {
        if (message.PreviousSessionBlocks !== undefined) {
            PreviousSessionBlocks.encode(message.PreviousSessionBlocks, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetPreviousSessionBlocksResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.PreviousSessionBlocks = PreviousSessionBlocks.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetPreviousSessionBlocksResponse,
        };
        if (object.PreviousSessionBlocks !== undefined &&
            object.PreviousSessionBlocks !== null) {
            message.PreviousSessionBlocks = PreviousSessionBlocks.fromJSON(object.PreviousSessionBlocks);
        }
        else {
            message.PreviousSessionBlocks = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.PreviousSessionBlocks !== undefined &&
            (obj.PreviousSessionBlocks = message.PreviousSessionBlocks
                ? PreviousSessionBlocks.toJSON(message.PreviousSessionBlocks)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetPreviousSessionBlocksResponse,
        };
        if (object.PreviousSessionBlocks !== undefined &&
            object.PreviousSessionBlocks !== null) {
            message.PreviousSessionBlocks = PreviousSessionBlocks.fromPartial(object.PreviousSessionBlocks);
        }
        else {
            message.PreviousSessionBlocks = undefined;
        }
        return message;
    },
};
const baseQueryGetSessionStorageForSpecRequest = { index: "" };
export const QueryGetSessionStorageForSpecRequest = {
    encode(message, writer = Writer.create()) {
        if (message.index !== "") {
            writer.uint32(10).string(message.index);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSessionStorageForSpecRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.index = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetSessionStorageForSpecRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = String(object.index);
        }
        else {
            message.index = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.index !== undefined && (obj.index = message.index);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSessionStorageForSpecRequest,
        };
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = "";
        }
        return message;
    },
};
const baseQueryGetSessionStorageForSpecResponse = {};
export const QueryGetSessionStorageForSpecResponse = {
    encode(message, writer = Writer.create()) {
        if (message.sessionStorageForSpec !== undefined) {
            SessionStorageForSpec.encode(message.sessionStorageForSpec, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetSessionStorageForSpecResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionStorageForSpec = SessionStorageForSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetSessionStorageForSpecResponse,
        };
        if (object.sessionStorageForSpec !== undefined &&
            object.sessionStorageForSpec !== null) {
            message.sessionStorageForSpec = SessionStorageForSpec.fromJSON(object.sessionStorageForSpec);
        }
        else {
            message.sessionStorageForSpec = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.sessionStorageForSpec !== undefined &&
            (obj.sessionStorageForSpec = message.sessionStorageForSpec
                ? SessionStorageForSpec.toJSON(message.sessionStorageForSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetSessionStorageForSpecResponse,
        };
        if (object.sessionStorageForSpec !== undefined &&
            object.sessionStorageForSpec !== null) {
            message.sessionStorageForSpec = SessionStorageForSpec.fromPartial(object.sessionStorageForSpec);
        }
        else {
            message.sessionStorageForSpec = undefined;
        }
        return message;
    },
};
const baseQueryAllSessionStorageForSpecRequest = {};
export const QueryAllSessionStorageForSpecRequest = {
    encode(message, writer = Writer.create()) {
        if (message.pagination !== undefined) {
            PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSessionStorageForSpecRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSessionStorageForSpecRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSessionStorageForSpecRequest,
        };
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageRequest.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQueryAllSessionStorageForSpecResponse = {};
export const QueryAllSessionStorageForSpecResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.sessionStorageForSpec) {
            SessionStorageForSpec.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSessionStorageForSpecResponse,
        };
        message.sessionStorageForSpec = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.sessionStorageForSpec.push(SessionStorageForSpec.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSessionStorageForSpecResponse,
        };
        message.sessionStorageForSpec = [];
        if (object.sessionStorageForSpec !== undefined &&
            object.sessionStorageForSpec !== null) {
            for (const e of object.sessionStorageForSpec) {
                message.sessionStorageForSpec.push(SessionStorageForSpec.fromJSON(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromJSON(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.sessionStorageForSpec) {
            obj.sessionStorageForSpec = message.sessionStorageForSpec.map((e) => e ? SessionStorageForSpec.toJSON(e) : undefined);
        }
        else {
            obj.sessionStorageForSpec = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSessionStorageForSpecResponse,
        };
        message.sessionStorageForSpec = [];
        if (object.sessionStorageForSpec !== undefined &&
            object.sessionStorageForSpec !== null) {
            for (const e of object.sessionStorageForSpec) {
                message.sessionStorageForSpec.push(SessionStorageForSpec.fromPartial(e));
            }
        }
        if (object.pagination !== undefined && object.pagination !== null) {
            message.pagination = PageResponse.fromPartial(object.pagination);
        }
        else {
            message.pagination = undefined;
        }
        return message;
    },
};
const baseQuerySessionStorageForAllSpecsRequest = { blockNum: 0 };
export const QuerySessionStorageForAllSpecsRequest = {
    encode(message, writer = Writer.create()) {
        if (message.blockNum !== 0) {
            writer.uint32(8).uint64(message.blockNum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySessionStorageForAllSpecsRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.blockNum = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQuerySessionStorageForAllSpecsRequest,
        };
        if (object.blockNum !== undefined && object.blockNum !== null) {
            message.blockNum = Number(object.blockNum);
        }
        else {
            message.blockNum = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.blockNum !== undefined && (obj.blockNum = message.blockNum);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySessionStorageForAllSpecsRequest,
        };
        if (object.blockNum !== undefined && object.blockNum !== null) {
            message.blockNum = object.blockNum;
        }
        else {
            message.blockNum = 0;
        }
        return message;
    },
};
const baseQuerySessionStorageForAllSpecsResponse = {};
export const QuerySessionStorageForAllSpecsResponse = {
    encode(message, writer = Writer.create()) {
        if (message.servicers !== undefined) {
            StakeStorage.encode(message.servicers, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQuerySessionStorageForAllSpecsResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.servicers = StakeStorage.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQuerySessionStorageForAllSpecsResponse,
        };
        if (object.servicers !== undefined && object.servicers !== null) {
            message.servicers = StakeStorage.fromJSON(object.servicers);
        }
        else {
            message.servicers = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.servicers !== undefined &&
            (obj.servicers = message.servicers
                ? StakeStorage.toJSON(message.servicers)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQuerySessionStorageForAllSpecsResponse,
        };
        if (object.servicers !== undefined && object.servicers !== null) {
            message.servicers = StakeStorage.fromPartial(object.servicers);
        }
        else {
            message.servicers = undefined;
        }
        return message;
    },
};
const baseQueryAllSessionStoragesForSpecRequest = { specName: "" };
export const QueryAllSessionStoragesForSpecRequest = {
    encode(message, writer = Writer.create()) {
        if (message.specName !== "") {
            writer.uint32(10).string(message.specName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSessionStoragesForSpecRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.specName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSessionStoragesForSpecRequest,
        };
        if (object.specName !== undefined && object.specName !== null) {
            message.specName = String(object.specName);
        }
        else {
            message.specName = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.specName !== undefined && (obj.specName = message.specName);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSessionStoragesForSpecRequest,
        };
        if (object.specName !== undefined && object.specName !== null) {
            message.specName = object.specName;
        }
        else {
            message.specName = "";
        }
        return message;
    },
};
const baseQueryAllSessionStoragesForSpecResponse = {};
export const QueryAllSessionStoragesForSpecResponse = {
    encode(message, writer = Writer.create()) {
        for (const v of message.storages) {
            SessionStorageForSpec.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryAllSessionStoragesForSpecResponse,
        };
        message.storages = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.storages.push(SessionStorageForSpec.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryAllSessionStoragesForSpecResponse,
        };
        message.storages = [];
        if (object.storages !== undefined && object.storages !== null) {
            for (const e of object.storages) {
                message.storages.push(SessionStorageForSpec.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.storages) {
            obj.storages = message.storages.map((e) => e ? SessionStorageForSpec.toJSON(e) : undefined);
        }
        else {
            obj.storages = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryAllSessionStoragesForSpecResponse,
        };
        message.storages = [];
        if (object.storages !== undefined && object.storages !== null) {
            for (const e of object.storages) {
                message.storages.push(SessionStorageForSpec.fromPartial(e));
            }
        }
        return message;
    },
};
const baseQueryGetEarliestSessionStartRequest = {};
export const QueryGetEarliestSessionStartRequest = {
    encode(_, writer = Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetEarliestSessionStartRequest,
        };
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
    fromJSON(_) {
        const message = {
            ...baseQueryGetEarliestSessionStartRequest,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseQueryGetEarliestSessionStartRequest,
        };
        return message;
    },
};
const baseQueryGetEarliestSessionStartResponse = {};
export const QueryGetEarliestSessionStartResponse = {
    encode(message, writer = Writer.create()) {
        if (message.EarliestSessionStart !== undefined) {
            EarliestSessionStart.encode(message.EarliestSessionStart, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryGetEarliestSessionStartResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.EarliestSessionStart = EarliestSessionStart.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryGetEarliestSessionStartResponse,
        };
        if (object.EarliestSessionStart !== undefined &&
            object.EarliestSessionStart !== null) {
            message.EarliestSessionStart = EarliestSessionStart.fromJSON(object.EarliestSessionStart);
        }
        else {
            message.EarliestSessionStart = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.EarliestSessionStart !== undefined &&
            (obj.EarliestSessionStart = message.EarliestSessionStart
                ? EarliestSessionStart.toJSON(message.EarliestSessionStart)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryGetEarliestSessionStartResponse,
        };
        if (object.EarliestSessionStart !== undefined &&
            object.EarliestSessionStart !== null) {
            message.EarliestSessionStart = EarliestSessionStart.fromPartial(object.EarliestSessionStart);
        }
        else {
            message.EarliestSessionStart = undefined;
        }
        return message;
    },
};
const baseQueryVerifyPairingRequest = {
    spec: 0,
    userAddr: "",
    servicerAddr: "",
    blockNum: 0,
};
export const QueryVerifyPairingRequest = {
    encode(message, writer = Writer.create()) {
        if (message.spec !== 0) {
            writer.uint32(8).uint64(message.spec);
        }
        if (message.userAddr !== "") {
            writer.uint32(18).string(message.userAddr);
        }
        if (message.servicerAddr !== "") {
            writer.uint32(26).string(message.servicerAddr);
        }
        if (message.blockNum !== 0) {
            writer.uint32(32).uint64(message.blockNum);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryVerifyPairingRequest,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.spec = longToNumber(reader.uint64());
                    break;
                case 2:
                    message.userAddr = reader.string();
                    break;
                case 3:
                    message.servicerAddr = reader.string();
                    break;
                case 4:
                    message.blockNum = longToNumber(reader.uint64());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryVerifyPairingRequest,
        };
        if (object.spec !== undefined && object.spec !== null) {
            message.spec = Number(object.spec);
        }
        else {
            message.spec = 0;
        }
        if (object.userAddr !== undefined && object.userAddr !== null) {
            message.userAddr = String(object.userAddr);
        }
        else {
            message.userAddr = "";
        }
        if (object.servicerAddr !== undefined && object.servicerAddr !== null) {
            message.servicerAddr = String(object.servicerAddr);
        }
        else {
            message.servicerAddr = "";
        }
        if (object.blockNum !== undefined && object.blockNum !== null) {
            message.blockNum = Number(object.blockNum);
        }
        else {
            message.blockNum = 0;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.spec !== undefined && (obj.spec = message.spec);
        message.userAddr !== undefined && (obj.userAddr = message.userAddr);
        message.servicerAddr !== undefined &&
            (obj.servicerAddr = message.servicerAddr);
        message.blockNum !== undefined && (obj.blockNum = message.blockNum);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryVerifyPairingRequest,
        };
        if (object.spec !== undefined && object.spec !== null) {
            message.spec = object.spec;
        }
        else {
            message.spec = 0;
        }
        if (object.userAddr !== undefined && object.userAddr !== null) {
            message.userAddr = object.userAddr;
        }
        else {
            message.userAddr = "";
        }
        if (object.servicerAddr !== undefined && object.servicerAddr !== null) {
            message.servicerAddr = object.servicerAddr;
        }
        else {
            message.servicerAddr = "";
        }
        if (object.blockNum !== undefined && object.blockNum !== null) {
            message.blockNum = object.blockNum;
        }
        else {
            message.blockNum = 0;
        }
        return message;
    },
};
const baseQueryVerifyPairingResponse = { valid: false, overlap: false };
export const QueryVerifyPairingResponse = {
    encode(message, writer = Writer.create()) {
        if (message.valid === true) {
            writer.uint32(8).bool(message.valid);
        }
        if (message.overlap === true) {
            writer.uint32(40).bool(message.overlap);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseQueryVerifyPairingResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.valid = reader.bool();
                    break;
                case 5:
                    message.overlap = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseQueryVerifyPairingResponse,
        };
        if (object.valid !== undefined && object.valid !== null) {
            message.valid = Boolean(object.valid);
        }
        else {
            message.valid = false;
        }
        if (object.overlap !== undefined && object.overlap !== null) {
            message.overlap = Boolean(object.overlap);
        }
        else {
            message.overlap = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.valid !== undefined && (obj.valid = message.valid);
        message.overlap !== undefined && (obj.overlap = message.overlap);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseQueryVerifyPairingResponse,
        };
        if (object.valid !== undefined && object.valid !== null) {
            message.valid = object.valid;
        }
        else {
            message.valid = false;
        }
        if (object.overlap !== undefined && object.overlap !== null) {
            message.overlap = object.overlap;
        }
        else {
            message.overlap = false;
        }
        return message;
    },
};
export class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
    }
    Params(request) {
        const data = QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "Params", data);
        return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
    }
    StakeMap(request) {
        const data = QueryGetStakeMapRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "StakeMap", data);
        return promise.then((data) => QueryGetStakeMapResponse.decode(new Reader(data)));
    }
    StakeMapAll(request) {
        const data = QueryAllStakeMapRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "StakeMapAll", data);
        return promise.then((data) => QueryAllStakeMapResponse.decode(new Reader(data)));
    }
    SpecStakeStorage(request) {
        const data = QueryGetSpecStakeStorageRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "SpecStakeStorage", data);
        return promise.then((data) => QueryGetSpecStakeStorageResponse.decode(new Reader(data)));
    }
    SpecStakeStorageAll(request) {
        const data = QueryAllSpecStakeStorageRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "SpecStakeStorageAll", data);
        return promise.then((data) => QueryAllSpecStakeStorageResponse.decode(new Reader(data)));
    }
    StakedServicers(request) {
        const data = QueryStakedServicersRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "StakedServicers", data);
        return promise.then((data) => QueryStakedServicersResponse.decode(new Reader(data)));
    }
    BlockDeadlineForCallback(request) {
        const data = QueryGetBlockDeadlineForCallbackRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "BlockDeadlineForCallback", data);
        return promise.then((data) => QueryGetBlockDeadlineForCallbackResponse.decode(new Reader(data)));
    }
    UnstakingServicersAllSpecs(request) {
        const data = QueryGetUnstakingServicersAllSpecsRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "UnstakingServicersAllSpecs", data);
        return promise.then((data) => QueryGetUnstakingServicersAllSpecsResponse.decode(new Reader(data)));
    }
    UnstakingServicersAllSpecsAll(request) {
        const data = QueryAllUnstakingServicersAllSpecsRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "UnstakingServicersAllSpecsAll", data);
        return promise.then((data) => QueryAllUnstakingServicersAllSpecsResponse.decode(new Reader(data)));
    }
    GetPairing(request) {
        const data = QueryGetPairingRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "GetPairing", data);
        return promise.then((data) => QueryGetPairingResponse.decode(new Reader(data)));
    }
    CurrentSessionStart(request) {
        const data = QueryGetCurrentSessionStartRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "CurrentSessionStart", data);
        return promise.then((data) => QueryGetCurrentSessionStartResponse.decode(new Reader(data)));
    }
    PreviousSessionBlocks(request) {
        const data = QueryGetPreviousSessionBlocksRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "PreviousSessionBlocks", data);
        return promise.then((data) => QueryGetPreviousSessionBlocksResponse.decode(new Reader(data)));
    }
    SessionStorageForSpec(request) {
        const data = QueryGetSessionStorageForSpecRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "SessionStorageForSpec", data);
        return promise.then((data) => QueryGetSessionStorageForSpecResponse.decode(new Reader(data)));
    }
    SessionStorageForSpecAll(request) {
        const data = QueryAllSessionStorageForSpecRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "SessionStorageForSpecAll", data);
        return promise.then((data) => QueryAllSessionStorageForSpecResponse.decode(new Reader(data)));
    }
    SessionStorageForAllSpecs(request) {
        const data = QuerySessionStorageForAllSpecsRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "SessionStorageForAllSpecs", data);
        return promise.then((data) => QuerySessionStorageForAllSpecsResponse.decode(new Reader(data)));
    }
    AllSessionStoragesForSpec(request) {
        const data = QueryAllSessionStoragesForSpecRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "AllSessionStoragesForSpec", data);
        return promise.then((data) => QueryAllSessionStoragesForSpecResponse.decode(new Reader(data)));
    }
    EarliestSessionStart(request) {
        const data = QueryGetEarliestSessionStartRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "EarliestSessionStart", data);
        return promise.then((data) => QueryGetEarliestSessionStartResponse.decode(new Reader(data)));
    }
    VerifyPairing(request) {
        const data = QueryVerifyPairingRequest.encode(request).finish();
        const promise = this.rpc.request("lavanet.lava.servicer.Query", "VerifyPairing", data);
        return promise.then((data) => QueryVerifyPairingResponse.decode(new Reader(data)));
    }
}
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
    }
    return long.toNumber();
}
if (util.Long !== Long) {
    util.Long = Long;
    configure();
}