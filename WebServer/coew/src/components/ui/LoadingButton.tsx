import {Loader2} from "lucide-react";
import {Button} from "@/components/ui/button";

export default  function LoadingButton({ loading, text }: { loading: boolean, text:string }) {
    if(loading){
        return (
            <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button>
        )
    }else{
        return (
            <Button className="mr-2 h-4 w-4">{text}</Button>
        )
    }
}