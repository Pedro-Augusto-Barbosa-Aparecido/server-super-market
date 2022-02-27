import client from "../client";

import { Request, Response } from "express";
import selects from "./selects.json";
import { truncate } from "fs";

export default class BrandController {
    getList = async (req: Request, res: Response) => {
        try {
            const { name, active, start, limit } = req.body;

            const brands = await client.brand.findMany({
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
                select: selects.brands

            });

            return res.status(200).json({
                results: brands,
                total: brands.length,
                msg: brands.length > 0 ? '' : 'No has data on db.',
                success: true

            });

        } catch (err) {
            return res.status(500).json({
                err: err,
                total: 0,
                msg: "",
                success: false
                
            });

        }
        
    }

    create = async (req: Request, res: Response) => {
        try {
            const { name, active } = req.body;

            const brand = await client.brand.create({
                select: selects.brands,
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

        } catch (err) {
            return res.status(500).json({
                err: err,
                msg: "",
                success: false
                
            });

        }
        
    }

    get = async (req: Request, res: Response) => {
        try {
            const { id_brand } = req.params;

            const brand = await client.brand.findUnique({
                select: selects.brands,
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

        } catch (err) {
            return res.status(500).json({
                err: err,
                msg: "",
                success: false
                
            });

        }
        
    }

    delete = async (req: Request, res: Response) => {
        try {
            const { id_brand } = req.params;

            const brand = await client.brand.delete({
                select: selects.brands,
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

        } catch (err) {
            return res.status(500).json({
                err: err,
                msg: "",
                success: false
                
            });

        }
        
    }

    update = async (req: Request, res: Response) => {
        try {
            const { name, active } = req.body;
            const { id_brand } = req.params;

            const brand = await client.brand.update({
                select: selects.brands,
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
                    success: truncate
                });

            return res.status(404).json({
                result: {},
                total: 1,
                msg: 'Brand not found!',
                success: truncate
            });

        } catch (err) {
            return res.status(500).json({
                err: err,
                msg: "",
                success: false
                
            });

        }
        
    }

}
