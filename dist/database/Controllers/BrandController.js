"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("../client"));
const selects_json_1 = __importDefault(require("./selects.json"));
const fs_1 = require("fs");
class BrandController {
    constructor() {
        this.getList = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, active, start, limit } = req.body;
                const brands = yield client_1.default.brand.findMany({
                    skip: start || 0,
                    take: limit || Number.MAX_SAFE_INTEGER,
                    where: {
                        name: {
                            contains: name,
                        },
                        active: {
                            equals: active
                        }
                    },
                    select: selects_json_1.default.brands
                });
                return res.status(200).json({
                    results: brands,
                    total: brands.length,
                    msg: brands.length > 0 ? '' : 'No has data on db.',
                    success: true
                });
            }
            catch (err) {
                return res.status(500).json({
                    err: err,
                    total: 0,
                    msg: "",
                    success: false
                });
            }
        });
        this.create = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, active } = req.body;
                const brand = yield client_1.default.brand.create({
                    select: selects_json_1.default.brands,
                    data: {
                        name: name,
                        active: active
                    }
                });
                if (brand)
                    return res.status(200).json({
                        result: brand,
                        total: 1,
                        msg: '',
                        success: true
                    });
                return res.status(404).json({
                    result: {},
                    total: 0,
                    msg: 'Can\'t create brand!',
                    success: true
                });
            }
            catch (err) {
                return res.status(500).json({
                    err: err,
                    msg: "",
                    success: false
                });
            }
        });
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_brand } = req.params;
                const brand = yield client_1.default.brand.findUnique({
                    select: selects_json_1.default.brands,
                    where: {
                        id: id_brand
                    }
                });
                if (brand)
                    return res.status(200).json({
                        result: brand,
                        total: 1,
                        msg: '',
                        success: true
                    });
                return res.status(404).json({
                    result: {},
                    total: 0,
                    msg: 'Brand not Found',
                    success: true
                });
            }
            catch (err) {
                return res.status(500).json({
                    err: err,
                    msg: "",
                    success: false
                });
            }
        });
        this.delete = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id_brand } = req.params;
                const brand = yield client_1.default.brand.delete({
                    select: selects_json_1.default.brands,
                    where: {
                        id: id_brand
                    }
                });
                if (brand)
                    return res.status(200).json({
                        result: brand,
                        total: 1,
                        msg: '',
                        success: true
                    });
                return res.status(404).json({
                    result: {},
                    total: 0,
                    msg: 'Brand not Found',
                    success: true
                });
            }
            catch (err) {
                return res.status(500).json({
                    err: err,
                    msg: "",
                    success: false
                });
            }
        });
        this.update = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, active } = req.body;
                const { id_brand } = req.params;
                const brand = yield client_1.default.brand.update({
                    select: selects_json_1.default.brands,
                    where: {
                        id: id_brand
                    },
                    data: {
                        name: name,
                        active: active
                    }
                });
                if (brand)
                    return res.status(200).json({
                        result: brand,
                        total: 1,
                        msg: '',
                        success: fs_1.truncate
                    });
                return res.status(404).json({
                    result: {},
                    total: 1,
                    msg: 'Brand not found!',
                    success: fs_1.truncate
                });
            }
            catch (err) {
                return res.status(500).json({
                    err: err,
                    msg: "",
                    success: false
                });
            }
        });
    }
}
exports.default = BrandController;
