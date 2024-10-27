import Form from '@/app/ui/invoices/edit-form';
import {notFound} from "next/navigation";
import {fetchCustomers, fetchInvoiceById} from "@/app/lib/data";

export async function EditFormWrapper({id}: { id: string }) {
    const [invoice, customers] = await Promise.all([
        fetchInvoiceById(id),
        fetchCustomers(),
    ]);

    if (!invoice) {
        notFound();
    }

    return <Form invoice={invoice} customers={customers}/>
}