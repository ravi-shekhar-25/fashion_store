"use client";
import React from 'react';
import {Divider, Drawer} from "@mui/material";
import {category} from "@/data/category";
import {XMarkIcon} from "@heroicons/react/24/solid";

const AdvanceFilter = ({open, setOpen, drawerWidth}:
                       {open:boolean;
                           setOpen: any;
                           drawerWidth?:any;
                       }) => {
    return (
        <div>
            <Drawer anchor={'left'} open={open} onClose={() => setOpen(false)}
                    sx={{ '& .MuiDrawer-paper': { boxSizing: 'border-box', marginTop:'4rem' ,width: drawerWidth }}}>
                <div className={'p-2 mb-10'}>
                    <div className={"flex justify-between"}>
                        <h2 className="font-bold p-5">FILTERS</h2>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="relative rounded-md bg-white text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                        >
                            <span className="absolute -inset-2.5"/>
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon aria-hidden="true" className="size-7"/>
                        </button>
                    </div>
                    <Divider className={''}/>
                    {category.map((data: any, index: number) => (
                        <React.Fragment key={index}>
                            <div
                                className="flex flex-col gap-4 font-semibold p-6"
                            >
                                <span>{data.name}</span>
                                <div className="grid grid-cols-2 gap-2 font-normal">
                                    {data.subcategory.map((sub: string, subIndex: number) => (
                                        <label key={subIndex} className="flex items-center gap-2">
                                            <input type="checkbox" value={sub}/>
                                            {sub}
                                        </label>
                                    ))}
                                </div>

                            </div>
                            <Divider className={''}/>
                        </React.Fragment>
                    ))}
                </div>
            </Drawer>
        </div>
    );
};

export default AdvanceFilter;