import * as React from 'react';
import Card from '../../components/Card/Card';
import Columns from '../../components/Layout/Grid/Columns';
import Column from '../../components/Layout/Grid/Column';
import Content from '../../components/Card/Content/Content';
import Image from '../../components/Card/Content/Image';
import String from '../../helpers/String';
import PostApiHttpRequests from '../../requests/PostApiHttpRequests';
import Detail from './Detail';
import Footer from '../../components/Card/Footer/Footer';
import Item from '../../components/Card/Footer/Item';

interface Post {
    id: number,
    title: string,
    body: string
}

class List extends React.Component {

    state = {
        posts: [],
        post: null
    }

    postApiHttpRequested: Promise<void> | undefined;

    componentDidMount(): void {

        if (this.postApiHttpRequested) {
            return;
        }

        this.postApiHttpRequested = PostApiHttpRequests
            .All()
            .then(res => {
                const posts = res.data
                this.setState(posts)
            })
    }

    handleDetailClick = (e: any) => {
        PostApiHttpRequests
            .Find(e.target.dataset.value)
            .then(res => {
                const post = res.data
                this.setState({ post })
            });
    }

    list() {
        return (
            <Column className="is-8">
                <Columns className='is-multiline'>
                    {
                        this.state.posts.map((post: Post) =>
                            <Column key={post.id} className="is-one-third is-multiline">
                                <Card>
                                    <Image
                                        src={"https://loremflickr.com/320/240?random=" + post.id}
                                        format="4by3"
                                        alt="ALT image"
                                    />
                                    <Content>
                                        {String.truncate(post.body, 100)}
                                    </Content>
                                    <Footer>
                                        <Item
                                            onClick={this.handleDetailClick}
                                            value="Voir le détail"
                                            dataValue={post.id}
                                        />
                                    </Footer>
                                </Card>
                            </Column>
                        )
                    }
                </Columns>
            </Column>
        )
    }

    detail() {
        if (this.state.post) {
            return (

                <Column className="is-3" ref={"animate-" + this.state.post}>
                    <Detail post={this.state.post} />
                </Column>

            )
        }
    }

    render() {
        return (
            <Columns className="is-centered">
                {this.list()}
                {this.detail()}
            </Columns>
        )
    }
}

export default List;