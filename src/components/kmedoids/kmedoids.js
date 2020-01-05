import React, {Component} from 'react';
import {Points} from './points'
import {AddPointForm} from './addPointForm';
import {KMedoidsChart} from './kmedoidsChart';
import {KMedoidsBackground} from './kmedoidsBackground';
import {KMedoidsSlider} from './kmedoidsSlider';
import {KMedoidsDropdown} from './kmedoidsDropdown';
import { Container } from 'semantic-ui-react';
import './kmedoids.css';


const colors = [
    'red',
    'green',
    'blue',
    'orange',
    'green',
    'sienna',
    'peachpuff',
    'purple',
    'pink',
    'turquoise'
];

const metrics = [
    "cosine", 
    "manhattan", // L1
    "euclidean", // L2
    "chebyshev", 
    "hamming", 
    "jaccard"
];

export class KMedoids extends Component {
    constructor() {
        super();
        this.state = {
            points: [{x: 1.0, y: 2.0, label: 0}, {x: 2.0, y: 1.0, label: 0}, {x: 3.0, y: 4.0, label: 0}, {x: -1.0, y: 2.0, label: 0}],
            k: 1,
            centroids: [{x: 1.0, y: 2.0, label: 0}], 
            metric: 'euclidean', 
            toggle: 0
        };
    };

    render() {
        return (
            <div>
                <Container className="kmedoids">
                    <AddPointForm 
                        points={this.state.points}
                        onNewPoint={
                            point => this.setState({
                                points: [...this.state.points, point]
                            })
                        }
                        updateData={
                            outputData => this.setState({
                                centroids: outputData.centroids,
                                points: outputData.points,
                                toggle: (this.state.toggle + 1) % 2
                            })
                        }
                        k={this.state.k}
                        metric={this.state.metric}
                    />
                    <KMedoidsDropdown 
                        updateMetric={
                            newMetric => this.setState({
                                metric: newMetric
                            })
                        }
                        metrics={metrics}
                        metric={this.state.metric}
                    />
                    <KMedoidsSlider 
                        k={this.state.k}
                        updateK={
                            newK => this.setState({
                                k: newK
                            })
                        }
                        maxColors={colors.length}
                    />
                    <Points 
                        points={this.state.points}
                        toggle={this.state.toggle}
                        deletePoint={
                            i => this.setState({
                                    points: this.state.points.filter((_, idx) => i !== idx),
                                    toggle: (this.state.toggle + 1) % 2
                                })
                        }
                    />
                    <KMedoidsChart 
                        points={this.state.points}
                        centroids={this.state.centroids}
                        colors={colors}
                    />
                </Container>
                <hr></hr>
                <KMedoidsBackground />
            </div>
        );
    }
};