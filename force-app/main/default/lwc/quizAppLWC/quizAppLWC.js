import { api,  LightningElement } from 'lwc';

export default class QuizAppLWC extends LightningElement {
     showQuestions = true;
    questions =[
    {
        id : 'input-1',
        'q':'An administrator at Universal Container needs an automated way to delete records based on field values. What automated solution should the administrator use??',
        'a':[   {label: 'Workflow',value: 'option1'},
                {label: 'Process Builder',value: 'option2'},
                {label: 'Flow Builder',value: 'option3'}, 
                {label: 'Automation Studio',value: 'option4'}],
        value:'option3'
        
    },
    {
        id : 'input-2',
        'q':'The Human resources department at Northern Trail outfitters wants employees to provide feedback about the manager using a custom object in Salesforce. It is important that managers are unable to see the feedback records from their staff. How should an administrator configure the custom object to meet this requirement??',
        'a':[   {label: 'Uncheck grant access using Hierarchies.',value: 'option1'},
                {label: 'Define a criteria-based sharing rules.',value: 'option2'},
                {label: 'Set the default external access to private.',value: 'option3'},
                {label: 'Configure an owner-based sharing rules.',value: 'option4'}],
        value:'option2'
    },
    {
        id : 'input-3',
        'q':'The VP of Sales at Cloud Kicks is receiving an error message that prevents them form saving an opportunity. The administrator attempted the same edit without receiving an error. How can the administrator validate the error the user is receiving?',
        'a':[   {label: 'Edit the page layout.',value: 'option1'},
                {label: 'View the setup audit trail.',value: 'option2'},
                {label: 'Log in as the user.',value: 'option3'},
                {label: 'Review the sharing model.',value: 'option4'}],
        value:'option3'
    },
    {
        id : 'input-4',
        'q':'The administrator at Aw Computing wants Account Details, related list and chatter feeds to each appear on separate tabs when reviewing an account. Which type of page should the administrator create?',
        'a':[   {label: 'Lightning app page.',value: 'option1'},
                {label: 'Lightning page Tab.',value: 'option2'},
                {label: 'Lightning record page.',value: 'option3'},
                {label: 'Lightning page Component.',value: 'option4'}],
        value:'option2'
    },
    {
        id : 'input-5',
        'q':'Cloud kicks want to give credit to Opportunity team members based on the level of effort contributed by each person toward each deal. What feature should the administrator use to meet this requirement?',
        'a':[   {label: 'Stages',value: 'option1'},
                {label: 'Splits',value: 'option2'},
                {label: 'Queues',value: 'option3'},
                {label: 'List Views',value: 'option4'}],
        value:'option2'
    },
    {
        id : 'input-6',
        'q':'Northern Trail Outfitters has a new flow that automatically sets the field values when a new account is created. That the flow is launched by a process, But the flow is not working properly. What should administrator do to identify the problem?',
        'a':[   {label: 'Use the native debug feature in the flow builder.',value: 'option1'},
                {label: 'Review debug logs with the login level.',value: 'option2'},
                {label: 'View the setup audit Trail and review for errors.',value: 'option3'},
                {label: 'Setup Email logs and review the send error log.',value: 'option4'}],
        value:'option1'
    },
    {
        id : 'input-7',
        'q':'Ursa Major Solar offers amazing experiences for all of it employees. The Employee engagement committee wants to post updates while restricting other employees from posting. What should the administrator create to meet this request?',
        'a':[   {label: 'Chatter Stream.',value: 'option1'},
                {label: 'Chatter Broadcast Group.',value: 'option2'},
                {label: 'Chatter Recommendations.',value: 'option3'},
                {label: 'Chatter Unlisted Group.',value: 'option4'}],
        value:'option2'
    },
    {
        id : 'input-8',
        'q':'The sales manager at cloud Kicks approves time off for their employees. They asked the administrator to ensure these requests are seen and responded to by a backup manager while the sales manager is out on vacation. What should administrator use to fulfill the requirement?',
        'a':[{label: 'Delegated approver',value: 'option1'},
                {label: 'Two step Approval process',value: 'option2'},
                {label: 'Approval history related list',value: 'option3'},
                {label: 'Delegated Administrator',value: 'option4'}],
        value:'option1'
    },
    {
        id : 'input-9',
        'q':'Cloud Kicks has a custom object called Shipments. The Company wants to see all the shipment items from an Account page. When an Account is deleted, the shipments should remain. What type of relationship should the administrator make between Shipments and Account?',
        'a':[   {label: 'Shipments should have a lookup to Account.',value: 'option1'},
                {label: 'Accounts should have a lookup to Shipments.',value: 'option2'},
                {label: 'Shipments should have a master-detail to Accounts.',value: 'option3'},
                {label: 'Accounts should have a master-detail to Shipments.',value: 'option4'}],
        value:'option1'
    },
    {
        id : 'input-10',
        'q':'A sales rep at Ursa Major Solar has launched a series of networking events. They are hosting one event per month and want to be able to report on campaign ROI by month and series. How should the administrator set up the Campaign to simplify reporting?',
        'a':[   {label: 'Add different record types for the monthly event types.',value: 'option1'},
                {label: 'Create individual Campaigns that all have the same name.',value: 'option2'},
                {label: 'Configure campaign Member Statuses to record which event members attended.',value: 'option3'},
                {label: 'Use Campaign Hierarchy where the monthly events roll up to a parent Campaign.',value: 'option4'}],
        value:'option3'
    },
    ]
    errorMsg=false;
    storeAnswers = new Map();
    questionsWithAns = new Map();
    @api score=0;

    renderedCallback() {
        try {
            this.questions.forEach(x => this.questionsWithAns.set(x.id, x.value))
          }
          catch(err) {
            console.error(err)
          }
    }
    


    handleChange(event){
      
        this.storeAnswers.set(event.target.name , event.target.value);
      
    }
    submitClick(){
        console.log('clicked')
        if(this.storeAnswers.size === this.questionsWithAns.size){
            this.errorMsg=false;
            try{
                this.showQuestions = false;
                for(const key of this.questionsWithAns.keys()){
                    if(this.storeAnswers.get(key) === this.questionsWithAns.get(key)){
                        console.log('correct' ,key)
                        this.score++;
                       // document.getElementById(this.storeAnswers.get(key)).style.color="#00ff00";
                    } else {
                        console.log('wrong' , key)
                    }
                }
               
             } catch(err){
                 console.log('err' ,err)
             }
        }  else {
            console.error('mark all answers')

            for(const key of this.questionsWithAns.keys()){
                if(!this.storeAnswers.has(key)){
                    this.errorMsg=true;
                   this.template.querySelector(`div[class=${key}]`).style.border = "thin solid red";
                    console.log('key', key)
                }
            }
            
        }
       
        
        console.log('ques ', this.questionsWithAns)
        console.log('ans ',this.storeAnswers)
       console.log('score : ' + this.score +' out of ' + this.questions.length)
       
    }
}