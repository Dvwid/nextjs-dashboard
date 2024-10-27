import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import {Metadata} from "next";
import {Suspense} from "react";
import {EditFormWrapper} from "@/app/ui/invoices/edit-form-wrapper";

export const metadata: Metadata = {
    title: 'Edit Invoice',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    {label: 'Invoices', href: '/dashboard/invoices'},
                    {
                        label: 'Edit Invoice',
                        href: `/dashboard/invoices/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Suspense fallback={<EditInvoicesSkeleton/>}>
                <EditFormWrapper id={id}></EditFormWrapper>
            </Suspense>
        </main>
    );
}

const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function EditInvoicesSkeleton() {
    return (
        <div
            className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}
        >
            <div className="flex p-4">
                <div className="h-5 w-5 rounded-md bg-gray-200"/>
                <div className="ml-2 h-6 w-16 rounded-md bg-gray-200 text-sm font-medium"/>
            </div>
            <div className="flex items-center justify-center truncate rounded-xl bg-white px-4 py-8">
                <div className="h-7 w-20 rounded-md bg-gray-200"/>
            </div>
        </div>
    );
}