export default function PriceRange(){
    return(
        <div>
            <input type="range" min="0" max="100" className="slider w-full" id="myRange"/>
            <div className="flex justify-between gap-2 -mt-2">
                <input type="number" value="100" className="border-[0.5px] w-1/3" />
                <input type="number" value="100000" className="border-[0.5px] w-1/3"/>
            </div>
            <input type="button" className="btn-primary mt-2" value="Go" />
        </div>
    )
}