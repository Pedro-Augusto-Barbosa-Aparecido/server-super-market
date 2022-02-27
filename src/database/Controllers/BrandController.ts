import client from "../client";

import { Request, Response } from "express";
import selects from "./selects.json";

export default class BrandController {
    getList = async (req: Request, res: Response) => {
        try {
            const { name, active } = req.body;
            const brands = await client.brand.findMany({
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
                msg: '',
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

    create = async (req: Request, res: Response) => {
        try {
            

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
            

        } catch (err) {
            return res.status(500).json({
                err: err,
                msg: "",
                success: false
                
            });

        }
        
    }

}
