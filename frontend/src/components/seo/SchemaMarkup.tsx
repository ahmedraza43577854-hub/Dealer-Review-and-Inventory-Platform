import type { JsonLd } from "@/lib/schema/types";
import { buildSchemaGraph } from "@/lib/schema/builders";

export type SchemaData = JsonLd | JsonLd[];

interface SchemaMarkupProps {
  data: SchemaData;
}

/**
 * Renders JSON-LD structured data for search engines.
 * Pass a single schema object or an array; arrays are emitted as one @graph document.
 */
export function SchemaMarkup({ data }: SchemaMarkupProps) {
  const schemas = Array.isArray(data) ? data : [data];
  const payload = buildSchemaGraph(schemas);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
