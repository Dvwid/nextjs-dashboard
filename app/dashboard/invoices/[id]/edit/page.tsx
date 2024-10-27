import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import {Metadata} from "next";
import React, {Suspense} from "react";
import {EditFormWrapper} from "@/app/ui/invoices/edit-form-wrapper";
import EditInvoicesSkeleton from "@/app/ui/invoices/edit-invoices-skeleton";

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