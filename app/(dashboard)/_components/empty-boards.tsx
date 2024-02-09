import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { useOrganization } from "@clerk/nextjs"
import { useMutation } from "convex/react";
import Image from "next/image"
import { toast } from "sonner";

export const EmptyBoard = ()=>{
    const {organization} = useOrganization();
    const { mutate, pending} = useApiMutation(api.board.create);
    
    const onClick = ()=>{
        if (!organization) return;

        mutate({
            title: "Untitled",
            orgId: organization.id
        })
        .then((id)=>{
            toast.success("created successfully");
        })
        .catch((err)=>{
            toast.error("failed to create");
        })
    }
    return(
        <div className="h-full flex flex-col items-center justify-center">
            <Image
                src={'/note.svg'}
                height={110}
                width={110}
                alt="Empty"
            />
            <h2 className="text-2xl font-semibold mt-6">
                Create your first board!
            </h2>
            <p className="text-muted-foreground text-sm mt-2">
                Start by creating a board for your organization
            </p>
            <div className="mt-6">
                <Button disabled={pending} onClick={onClick} size={'lg'}>
                    Create Board
                </Button>
            </div>
        </div>
    )
}