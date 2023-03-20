export type Major =
  | '간호학'
  | '의학'
  | '치의학'
  | '약학'
  | '물리치료'
  | '작업치료'
  | '임상병리'
  | '재활관련'
  | '방사선'
  | '응급구조'
  | '치위생'
  | '보건의료행정'
  | '의공.의과학'
  | '환경,보건 관련'
  | '의료정보학'
  | '치기공'
  | '한의학'

export type Region =
  | '서울'
  | '경기'
  | '인천'
  | '대전'
  | '충북'
  | '충남'
  | '대구'
  | '경북'
  | '부산'
  | '울산'
  | '경남'
  | '광주'
  | '전북'
  | '전남'
  | '강원'
  | '제주'

export type Gender = '남성' | '여성'

export type Grade = '1학년' | '2학년' | '3학년' | '4학년' | '5학년'

export type University = string

export type YearOfAdmission = string

export type GradeType = {
  grade: Grade | undefined
}

export type YearOfAdmissionType = {
  yearOfAdmission: YearOfAdmission
}

export type UniversityType = {
  university: University
}

export type MajorType = {
  major: Major | undefined | null
}

export type RegionType = {
  region: Region[] | undefined
}

export type BirthType = {
  birth: {
    isTouched: boolean
    isValid: boolean
    value: string
  }
}

export type GenderType = {
  gender: Gender | undefined
}

export type NameType = {
  name: {
    isTouched: boolean
    isValid: boolean
    value: string
  }
}

export type NicknameType = {
  nickname: {
    isTouched: boolean
    isValid: boolean
    value: string
  }
}

export type EmailType = {
  email: {
    isTouched: boolean
    isValid: boolean
    value: string
  }
}

export type MajorSpecificType = {
  majorSpecific: string
}

export type PrivacyPolicy = { privacyPolicy: boolean }

export type MarketingPolicy = { marketingPolicy: boolean }

export type AllPolicy = { allPolicy: boolean }

export type Auth = { hasInfo: boolean; token: string }
