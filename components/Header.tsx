"use client"

import { MagnifyingGlassIcon } from "@heroicons/react/16/solid"
import Image from "next/image"
import Link from "next/link"
import Avatar from "react-avatar"
import SearchButton from "./SearchButton"
import {
    SearchSelect,
    SearchSelectItem,
    Select,
    SelectItem
} from "@tremor/react"
import { useState } from "react"
import { useRouter } from "next/navigation"

const SORT_BY_MAP = {
    r:"Default",
    rv:"By Review",
    p:"By Price (low to high)",
    pd:"By Price (high to low)"
}

function Header() {
    const [pages,setPages] = useState("")
    const [sortBy,setSortBy] = useState("")
    const [minPrice,setMinPrice] = useState("")
    const [maxPrice,setMaxPrice] = useState("")
    const router= useRouter()

  return (
    <header className="flex flex-col items-center md:flex-row md:items-start md:space-x-6 px-2 pt-10 pb-5 md:p-10 md:pb-5">
        <Link
        href="/" 
        >
        <Image
        src="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt= "logo"
        width={150}
        height={150}
        className="object-contain mr-1"
        />
        </Link>
        <div className="w-full md:max-w-2xl">
            <form action={formData => {
                const searchTerm = formData.get("searchTerm ")
                if (!formData.get("searchTerm")) return

                const params = new URLSearchParams()

                if(pages) params.set("pages", pages.toString())
                if (sortBy) params.set("sortBy", sortBy.toString())
                if (minPrice) params.set("minPrice", minPrice.toString())
                if (maxPrice) params.set("maxPrice", maxPrice.toString())

                router.push(`/search/${searchTerm}?${params.toString()}`)
            }}>
                <div className="flex items-center gap-2 w-full px-4">
                    <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-0 px-6 py-4 md:max-w-5xl flex-1">
                        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400"/>
                        <input type="text" name="searchTerm" placeholder="Search..." className="outline-none flex-1" />
                    </div>
                    <SearchButton/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 p-4 max-w-lg md:max-w-none mx-auto items-center">
    <div>
        <SearchSelect
            onValueChange={(value) => setPages(value)}
            className="min-w-4"
            placeholder="# of pages"
        >
            {[...Array(100)].map((_, i) => (
                <SearchSelectItem key={i} value={(i + 1).toString()}>
                    {(i + 1).toString()} pages
                </SearchSelectItem>
            ))}
        </SearchSelect>
    </div>
    <div>
        <Select
            className="min-w-4"
            placeholder="Sort"
            onValueChange={(value) => setSortBy(value)}
        >
            {Object.entries(SORT_BY_MAP).map(([key, value]) => (
                <SelectItem key={key} value={key}>
                    {value}
                </SelectItem>
            ))}
        </Select>
    </div>
    <div>
        <SearchSelect
            className="min-w-4"
            placeholder="Min Price.."
            onValueChange={(value) => setMinPrice(value)}
        >
            {["", "1000", "2000", "3000", "4000", "5000", "5000+"].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                    {i === 0 ? "No Minimum" : `$${_.toString()}`}
                </SearchSelectItem>
            ))}
        </SearchSelect>
    </div>
    <div>
        <SearchSelect
            className="min-w-4"
            placeholder="Max Price..."
            onValueChange={(value) => setMaxPrice(value)}
        >
            {["", "1000", "2000", "3000", "4000", "5000", "5000+"].map((_, i) => (
                <SearchSelectItem key={i} value={_.toString()}>
                    {i === 0 ? "No Maximum" : `$${_.toString()}`}
                </SearchSelectItem>
            ))}
        </SearchSelect>
    </div>
</div>

                </form>            
        </div>
        <div className="hidden lg:flex flex-1 justify-end">
            <Avatar name="Ana Fariya" round size="50"/>
        </div>
    </header>
  )
}

export default Header