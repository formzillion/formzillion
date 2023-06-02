import { PageProps } from "@/types/PageProps";
import Integrations, { IIntegration } from "./integrations";
import integrationMap from "./integrations/integrationMap";
import Workflows from "./workflows";

export default async function ({ params }: PageProps) {
  const { teamId: teamSlug, formId } = params;
  const finalIntegrations: IIntegration[] = await integrationMap({ teamSlug });

  return (
    <div className="grid grid-cols-5 gap-4 divide-x divide-gray-200">
      <div className="col-span-1">
        <Integrations
          teamSlug={teamSlug}
          integrations={finalIntegrations}
          formId={formId}
        />
      </div>
      <div className="col-span-4 pl-4">
        <Workflows teamSlug={teamSlug} formId={formId} />
      </div>
    </div>
  );
}
