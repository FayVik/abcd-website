import { Heading1, Heading2, Paragraph } from '../Type'
import { ApolloClient, ApolloProvider, InMemoryCache, useQuery, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://graphql-api.mainnet.dandelion.link/',
    cache: new InMemoryCache()
});

const GET_METADATA_AT_20210429 = gql`
    query MetaTX {
        transactions(
            where: { metadata: { key: {_eq: "20210429"} } }
        ) {
            metadata {
                key
                value
            }
        }
    }
`
function MetadataTX() {
    const { loading, error, data } = useQuery(GET_METADATA_AT_20210429)
    if (loading) return <Paragraph>Loading...</Paragraph>
    if (error) return <Paragraph>Error</Paragraph>
    return (
        <div>
            <Heading1>
                {data.transactions[0].metadata[0].value.title}
            </Heading1>
            <Heading2>
                {data.transactions[0].metadata[0].value.slogan}
            </Heading2>
            
            {data.transactions[0].metadata[0].value.message.map((i) => <Paragraph>{i}</Paragraph>)}
            <Heading1>Founding Developers:</Heading1>
            {data.transactions[0].metadata[0].value.founding_devs.map((i) => <Heading2>{i}</Heading2>)}
        </div>
    )
}

export default function AboutABCD() {
    return (
        <ApolloProvider client={client}>
            <div className="w-1/2 bg-blue-400 mx-auto p-10 mb-10">
                <MetadataTX />
                <Paragraph>
                    <a href="https://explorer.cardano.org/en/transaction?id=22daf6fc233fb5cfd6ab2e21f63beae3a84ffdc035fdb3481d4c434b9a41ae2d">View this transaction...</a>
                </Paragraph>
            </div>
        </ApolloProvider>

    )
}
