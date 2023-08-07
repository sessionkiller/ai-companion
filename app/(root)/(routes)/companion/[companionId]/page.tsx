import { CompanionForm } from "@/components/companion-form";
import prismadb from "@/lib/prismadb";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionIdPage = async ({ params }: CompanionIdPageProps) => {
  //TODO: check subscription

  const companion =
    params.companionId === "new"
      ? null
      : await prismadb.companion.findUnique({
          where: {
            id: params.companionId,
          },
        });

  const categories = await prismadb.category.findMany();

  return <CompanionForm initialData={companion} categories={categories} />;
};

export default CompanionIdPage;
