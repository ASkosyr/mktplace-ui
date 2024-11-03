import { H3, H4, Paragraph } from "components/Typography";
export default function ProductDescription({
                                               product
                                           }) {
  return <div>
      <H3 mb={2}>Specification</H3>

        <Paragraph>{product.longDescription}</Paragraph>

          <H4>{product.title} Key Features</H4>

          <Paragraph >
          <ul>
              {product.keyFeatures}
          </ul>
          </Paragraph>

          <Paragraph >
          <h4>{product.title} Use Cases</h4>
          <ul>
              {product.useCases}
          </ul>
          </Paragraph>
    </div>;
}