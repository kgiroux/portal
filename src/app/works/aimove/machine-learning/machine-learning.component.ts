import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-learning',
  templateUrl: './machine-learning.component.html',
  styleUrls: ['./machine-learning.component.css']
})
export class MachineLearningComponent implements OnInit {

  public topics;
  constructor() { }

  ngOnInit() {

    this.topics = [{
      title: 'Deep Learning',
      subtitle: 'Model Base',
      content: ['Deep Learning is a set of method that can try to find a model with a high level of abstraction of data ' +
        'with different kind of architecture that is composed by nonlinear transformation.',
        'These techniques are use in many field as for example computer vision, speech recognition or facial recognition. ' +
        'Many societies fund this method like Google, Apple, Facebook or Amazon. ',
        'Taking the case of a image, this image can be represented ' +
        'with vector of data that contains data related to : pixels intensity, edges, regions with different shapes.',
        'There is three types of Deep Learning family : supervised, unsupervised, reinforcement',
      ],
      usecase: 'usecase'
    }, {
      title: 'Supervised Learning',
      subtitle: 'A type of DeepLearning',
      content: ['The supervised learning is a method that consist to give to the system different input, and provide also the output.' +
      'With this method we can drive the ways that the system will learn, because we will provide ' +
      'some "classes" that he has to classify. Taking an example of image classification. We would like to classify images in 2 ' +
      'different family/classes. For doing that we will provide the input, (the images to analyses, ' +
      'and the output (the classes that we would like to used). After that, the algorithm will extract ' +
      'some feature from images, and will be able to classify them.'],
      usecase: 'usecase'
    }, {
      title: 'Unsupervised Learning',
      subtitle: 'A type of DeepLearning',
      content: ['In opposite of Supervised Learning, the unsupervised learning the data that is provide to the algorithm, ' +
      'are not labeled or classified into categories', 'Instead of responding to feedback, unsupervised learning ' +
      'identifies commonalities in the data and reacts based on the presence or absence of ' +
      'such commonalities in each new piece of data. Models using unsupervised learning must learn ' +
      'the relationships between elements in a dataset and classify the raw data without help. ' +
      'All models have the same goals, that is to try to find some pattern, hidden structure or feature'],
      usecase: 'usecase'
    }, {
      title: 'Reinforcement Learning',
      subtitle: 'A type of DeepLearning',
      content: ['The reinforcement learning  consist for an automated agent, to tale the decision from experiment / experience. ' +
      'This will optimize the reward in function of the time. The agent is on a environment, will take his decision ' +
      'in function of his current state. After that, the environment will provide reward (that could be negative or positive). ' +
      'The agent will search from iteration the comportement where he can maxmize the reward in function of the time.',
      'The base of the model is different step : ',
      '- a set of state S in the environment',
      '- a set of action A that the agent can perform',
      '- a set of reward R that the agent can have',
      '',
      'To each epoch, the agent will received is state from the set S, ' +
      'and all the action possible from this state S that will mark as A(St).' +
      'He will choose an action, and will received a new state st+1, and a reward rt+1.',
      'This reward is most of the case equal to 0, and have a value of 1, when the agent is on key state of the environment. ' +
      'The reinforcement learning have to allow to the agent to change his "way of thinking" to let him maximise his reward.',
      'This method of reinforcement learning is particularly adapted to the problems where you need a compromised between the ' +
      'reward in a short term, and a reward on long term.'],
      usecase: 'Task planification, Telecommunication, chess'
    }, {
      title: 'CNN',
      subtitle: 'A class of deep, feed-forward artificial neural networks',
      content: ['CNNs use a variation of multilayer perceptrons designed to require minimal preprocessing. ' +
      'They are also known as shift invariant or space invariant artificial neural networks (SIANN), based on their shared-weights ' +
      'architecture and translation invariance characteristics.',
      'Convolutional networks were inspired by biological processes in that the connectivity pattern between neurons resembles ' +
      'the organization of the animal visual cortex. Individual cortical neurons respond to stimuli only in a restricted region of the ' +
      'visual field known as the receptive field. The receptive fields of different neurons partially overlap such that ' +
      'they cover the entire visual field.',
      'CNNs use relatively little pre-processing compared to other image classification algorithms. ' +
      'This means that the network learns the filters that in traditional algorithms were hand-engineered. ' +
      'This independence from prior knowledge and human effort in feature design is a major advantage.'],
      usecase: 'image and video recognition, image classification, medical image analysis'
    }, {
      title: 'Convolution Layer',
      subtitle: 'A part of the CNN',
      content: ['The convolutional layer serves to detect (multiple) patterns in multipe sub-regions ' +
      'in the input field using receptive fields.'],
      usecase: 'usecase'
    }, {
      title: 'Pooling Layer',
      subtitle: 'A part of the CNN',
      content: ['The pooling layer serves to progressively reduce the spatial size of the representation, to reduce the number of ' +
      'parameters and amount of computation in the network, and hence to also control overfitting.'],
      usecase: 'usecase'
    }, {
      title: 'Fully-Connected Layer',
      subtitle: 'A part of the CNN',
      content: ['Fully connected layers connect every neuron in one layer to every neuron in another layer.' +
      'It is in principle the same as the traditional multi-layer perceptron neural network (MLP).'],
      usecase: 'usecase'
    }, {
      title: 'Faster RCNN',
      subtitle: 'Object detection',
      content: ['The faster RCNN have two different networks. ' +
      'One of his network is a RPN for Region Proposal Network and the second is about object detection.',
      'The RPN is a network that will generate some region. The advantage of the RPN, is instead of performing a selective search ' +
      'in a image, will divide the picture into small anchors and propose all anchors that will have the probability to contains object. ' +
      'Anchors plays an important role in this type of network. ' +
      'The output of the RPN is a set of boxes that will be examined by the classifier and the regressor. ' +
      'The objectif is to check the occurrence of object on these boxes. RPN predict the possibility that an anchors contains an object, ' +
      'if it is a background/foreground and will refine the anchors.',
      'After the RPN, we will have regions with different sizes. We commonly used a ROI pooling (Region of interest). ' +
      'This will reduce the size of this regions to have a common size. The ROI pooling will split the feature maps into a ' +
      'fixed number of equal regions. On this regions will be able to apply a Max Pooling algorithm to each region'],
      usecase: 'usecase'
    }, {
      title: 'Mask RCNN',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'YOLO',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'GRU',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'RNN',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'LSTM',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'HMM',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'DTW',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'KNN',
      subtitle: 'k-Nearest Neighbors',
      content: ['K-Nearest Neighbors is one of the most basic algorithms. It can be used for both classification and regression tasks.' +
      'Creating/Training a model of this type means simply storing the dataset, much like plotting all the data points' +
      'When making a prediction for a new data point, the KNN model looks at its "k" closest neighbors for decision.' +
      'For example :',
      'You build a KNN classifier with n_neighbors = 3' +
      'KNN will look for the 3 closest neighbors when you make a new prediction. ' +
      '' +
      'KNN works really well with smaller datasets if fewer features. ' +
      'It may not perform well on very large datasets with a lot of features since it has to store all that data at hand.'],
      usecase: 'usecase'
    }, {
      title: 'Logistic Regression',
      subtitle: 'Logistic Regression',
      content: ['Logistic Regression is generalized linear model and counterintuitively, is a classification not a regression algorithm.' +
      'L1 type of regularization assumes that only a few features are important while L2 does not make this assumption.',
      'Linear regression, logistic regression, and other linear models predict base on a linear function of the input feature',
      'y=w*x + b',
      'In this case :',
      'y is the output or the prediction',
      'w is a slope or the coefficient',
      'x is the input',
      'b is the offset or the intercept',
      '',
      'w and b are learned parameters.',
      'In the case of logistic regression, the equation a little bit more complex :',
      'y = w[0]*x + w[1]*x + ..... + w[n]*x + b > 0',
      'In this case we have a dataset of n input features.'],
      usecase: 'usecase'
    }, {
      title: 'Decision Tree',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'Random Forest',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'SVM',
      subtitle: 'Support vector machines',
      content: ['Support Vector Machines (SVMs) are algorithms can be used for both classification (SVC) and regression ' +
      '(SVR) tasks in machine learning; they can work well with both linear and non-linear data.' ,
      'SVMs, similar to other models, look for the line or decision boundary that best separates data. ' +
      'Additionally, they look for the largest margin or the distance between points on the sides of the line or decision boundary.',
      'These points are called support vectors, and you can observe them in the image above. ' +
      'A good decision line will stay as far as possible from these points. D2, in this case, is the decision boundary of choice.',
      'What this increase in complexity does to the model is to make it more accurate compared to simpler models.',
      'As specified above, SVMs not only work well on linear data, but they can perform fine on non-linear data. ' +
      'When that is the case, they have a strong point to rely upon. And that is the "kernel trick". ' +
      'Let\'s see what that\'s all about.',
      'One of the main advantages of SVMs is that they are versatile, meaning that they can perform well on a good range of datasets.',
      'They can build complex decision boundaries even on lower dimensional data.',
      'SVMs can work well on high-dimensional data too, given that the datasets are of relatively small sample size. ',
      'Which leads us into some of the disadvantages. One major drawback is that if you need an algorithm ' +
      'for high-dimensional data with large sample-size (north of 100k), a support vector machine might not be the best choice.',
      'Another potential drawback is that they may require data preprocessing (such as scaling, for example), ' +
      'as we\'ve seen in the video lesson. ',
      'Thirdly, SVMs are not easy to visualize and inspect, which is why some practitioners choose models ' +
      'like Decision Trees or Random Forests, which may be easier to visualize and inspect.',
      'SVMs might require more expertise compared to simpler algorithms also because of the number of ' +
      'parameters that can be fine-tuned (for complexity, regularization, etc) to control the performance of the algorithm.',
      'Nevertheless, they are often chosen as the go-to choice for machine learning projects by many practitioners.'],
      usecase: 'usecase'
    }, {
      title: 'Encoder/ Decoder Network',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'Bayes Network',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'Template / Model/ Neural network',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }, {
      title: 'Attention / Global Attention etc …;',
      subtitle: 'SubTitle',
      content: ['Content'],
      usecase: 'usecase'
    }
    ];

  }





}
