// Data service for loading JSON data
export interface TeamMember {
	id: number;
	name: string;
	nameEn: string;
	role: string;
	department: string;
	level: string;
	badge: string;
	email: string;
	avatar: string;
	skills: string[];
	projectsCount: number;
	completedTasks: number;
	joinDate: string;
	status: string;
	location: string;
	bio: string;
}

export interface Project {
	id: number;
	name: string;
	nameKo: string;
	category: string;
	status: string;
	priority: string;
	description: string;
	progress: number;
	startDate: string;
	endDate: string;
	budget: number;
	teamMembers: number[];
	technologies: string[];
	milestones: Array<{
		name: string;
		date: string;
		completed: boolean;
	}>;
	tags: string[];
	client: string;
	thumbnail: string;
}

export interface Requirement {
	id: number;
	title: string;
	category: string;
	priority: string;
	status: string;
	description: string;
	projectId: number;
	assignedTo: number[];
	reporter: string;
	createdDate: string;
	dueDate: string;
	estimatedHours: number;
	actualHours: number;
	tags: string[];
	acceptanceCriteria: string[];
	comments: Array<{
		author: string;
		date: string;
		content: string;
	}>;
}

export interface DictionaryEntry {
	id: number;
	term: string;
	fullName: string;
	definition: string;
	category: string;
	examples: string[];
	relatedTerms: string[];
	tags: string[];
}

class DataService {
	private teamMembers: TeamMember[] | null = null;
	private projects: Project[] | null = null;
	private requirements: Requirement[] | null = null;
	private dictionary: DictionaryEntry[] | null = null;

	async getTeamMembers(): Promise<TeamMember[]> {
		if (this.teamMembers === null) {
			try {
				const response = await fetch('/data/team-members.json');
				const data = await response.json();
				this.teamMembers = data.teamMembers;
			} catch (error) {
				console.error('Failed to load team members:', error);
				this.teamMembers = [];
			}
		}
		return this.teamMembers;
	}

	async getProjects(): Promise<Project[]> {
		if (this.projects === null) {
			try {
				const response = await fetch('/data/projects.json');
				const data = await response.json();
				this.projects = data.projects;
			} catch (error) {
				console.error('Failed to load projects:', error);
				this.projects = [];
			}
		}
		return this.projects;
	}

	async getRequirements(): Promise<Requirement[]> {
		if (this.requirements === null) {
			try {
				const response = await fetch('/data/requirements.json');
				const data = await response.json();
				this.requirements = data.requirements;
			} catch (error) {
				console.error('Failed to load requirements:', error);
				this.requirements = [];
			}
		}
		return this.requirements;
	}

	async getDictionary(): Promise<DictionaryEntry[]> {
		if (this.dictionary === null) {
			try {
				const response = await fetch('/data/dictionary.json');
				const data = await response.json();
				this.dictionary = data.dictionary;
			} catch (error) {
				console.error('Failed to load dictionary:', error);
				this.dictionary = [];
			}
		}
		return this.dictionary;
	}

	async getTeamMemberById(id: number): Promise<TeamMember | undefined> {
		const teamMembers = await this.getTeamMembers();
		return teamMembers.find(member => member.id === id);
	}

	async getProjectById(id: number): Promise<Project | undefined> {
		const projects = await this.getProjects();
		return projects.find(project => project.id === id);
	}

	async getRequirementsByProjectId(projectId: number): Promise<Requirement[]> {
		const requirements = await this.getRequirements();
		return requirements.filter(req => req.projectId === projectId);
	}

	async getProjectsByTeamMember(memberId: number): Promise<Project[]> {
		const projects = await this.getProjects();
		return projects.filter(project => project.teamMembers.includes(memberId));
	}

	// Statistics and aggregated data
	async getProjectStats() {
		const projects = await this.getProjects();
		const totalProjects = projects.length;
		const activeProjects = projects.filter(p => p.status === 'In Progress').length;
		const completedProjects = projects.filter(p => p.status === 'Completed').length;
		const averageProgress = Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / totalProjects);

		return {
			total: totalProjects,
			active: activeProjects,
			completed: completedProjects,
			averageProgress,
			inReview: projects.filter(p => p.status === 'Review').length,
			planning: projects.filter(p => p.status === 'Planning').length
		};
	}

	async getTeamStats() {
		const teamMembers = await this.getTeamMembers();
		const totalMembers = teamMembers.length;
		const activeMembers = teamMembers.filter(m => m.status === 'active').length;
		const totalTasks = teamMembers.reduce((sum, m) => sum + m.completedTasks, 0);
		const totalProjects = teamMembers.reduce((sum, m) => sum + m.projectsCount, 0);

		return {
			total: totalMembers,
			active: activeMembers,
			totalTasks,
			totalProjects,
			averageTasksPerMember: Math.round(totalTasks / totalMembers),
			averageProjectsPerMember: Math.round(totalProjects / totalMembers)
		};
	}
}

export const dataService = new DataService();