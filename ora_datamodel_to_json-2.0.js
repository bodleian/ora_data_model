/*
  ORA DATA MODEL IN JAVASCRIPT NOTATION

  (Note that JSON does not allow comments, which are useful here, so this is actually
  a JavaScript file. The conversion to JSON is, thankfully, trivial!)

  A Javascript Object representation of the ORA4 data model Written against ORA Data Model v2.0
  
  For the changelog since v2.0rc4, see ora_datamodel_to_mods.xml
 */

ORA_Data_Model_Object = {
    // DEFAULT FIELDS
    "abstract": "",
    "additional_information": "",
    "alternative_title": "",
    "binary_files": [{
        "file_admin_access_condition_at_deposit": "",
        "file_admin_file_and_record_do_not_match": "",
        "file_admin_fedora3_datastream_identifier": "",
        "file_embargo_comment": "",
        "file_embargo_end_date": "",
        "file_embargo_reason": "",
        "file_embargo_release_method": "",
        "file_format": "",
        "file_last_access_request_date": "",
        "file_made_available_date": "",
        "file_name": "",
        "file_order": "",
        "file_path": "",
        "file_public_url": "",
        "file_rioxx_file_version": "",
        "file_size": "",
        "file_version": ""    
    }],
    "contributors": [{
        "contributor_email": "",
        "contributor_identifiers": [{
            "contributor_identifier": "",
            "contributor_identifier_scheme": ""
        }],
        "contributor_type": "",
        "contributor_website_url": "",
        "department": "",
        "display_name": "",
        "division": "",
        "family_name": "",
        "given_names": "",
        "initials": "",
        "institution": "",
        "institutional_identifier": "",
        "orcid_identifier": "",
        "oxford_college": "",
        "preferred_contributor_email": "",
        "preferred_family_name": "",
        "preferred_given_names": "",
        "preferred_initials": "",
        "research_group": "",
        "roles": [{
            "role_title": "",
            "role_order": "",
            "et_al": ""
        }],
        "sub_department": "",
        "sub_unit": ""
    }],
    "commissioning_body": "",
    "funding": [{
        "funder_compliance_met": "",
        "funder_funding_programme": "",
        "funder_grant": [{
            "grant_identifier": "",
            "is_funding_for": [""]
        }],
        "funder_identifier": "",
        "funder_name": ""
    }],
    "language": "",
    "keyword": [""],
    "pid": "",
    "ora_data_model_version": "",
    "pre_counter_downloads": "",
    "pre_counter_views": "",
    "record_content_source": "",
    "record_created_date": "",
    "record_identifiers": [{
        "record_identifier_scheme": "",
        "record_identifier": ""
    }],
    "record_publication_date": "",
    "record_version": "",
    "related_items": [{
        "related_item_citation_text": "",
        "related_item_title": "",
        "related_item_url": ""
    }],
    "subject": [""],
    "summary_documentation": "",
    "tinypid": "",
    "title": "",
    "sub_type_of_work": "",
    "type_of_work": "",

    // ADMIN FIELDS
    "admin_incorrect_version_deposited": "",
    "admin_notes": "",
    "confidential_report": "",
    "deposit_note": "",
    "depositor_contacted": "",
    "depositor_contact_email_template": "",
    "has_public_url": "",
    "history": [{
        "action_comment": "",
        "action_date": "",
        "action_description": "",
        "action_duration": "",
        "action_responsibility": ""
    }],
    "record_accept_updates": "",
    "record_deposit_date": "",
    "record_embargo_end_date": "",
    "record_embargo_reason": "",
    "record_embargo_release_method": "",
    "record_embargo_status": "",
    "record_first_reviewed_by": "",
    "record_ora_deposit_licence": "",
    "record_requires_review": "",
    "record_review_status": "",
    "rights_third_party_copyright_permission_received": "",
    "rt_ticket_number": "",
    "thesis_archive_version_complete": "",
    "thesis_dispensation_from_consultation_granted": "",
    "thesis_leave_to_supplicate_date": "",
    "thesis_student_system_updated": "",
    "thesis_voluntary_deposit": "",

    // BIBLIOGRAPHIC FIELDS
    "acceptance_date": "",
    "article_number": "",
    "chapter_number": "",
    "citation_publication_date": "",
    "citation_place_of_publication": "",
    "edition": "",
    "host_peer_review_status": "",
    "host_publication_status": "",
    "host_title": "",
    "issue_number": "",
    "journal_title": "",
    "journal_website_url": "",
    "pagination": "",
    "paper_number": "",
    "publisher_name": "",
    "publisher_website_url": "",
    "series_number": "",
    "series_title": "",
    "volume": "",

    // DATASET FIELDS
    "data_archiving_fee": "",
    "data_archiving_fee_details": "",
    "data_collection_start_date": "",
    "data_collection_end_date": "",
    "data_coverage_temporal_start_date": "",
    "data_coverage_temporal_end_date": "",
    "data_coverage_spatial": "",
    "data_digital_data_format": "",
    "data_digital_data_version": "",
    "data_digital_storage_location": "",
    "data_digital_total_file_size": "",
    "data_financier": "",
    "data_management_plan_url": "",
    "data_format": "",
    "data_physical_storage_location": "",

    // EVENT FIELDS
    "event_location": "",
    "event_start_date": "",
    "event_end_date": "",
    "event_series_title": "",
    "event_title": "",
    "event_website_url": "",

    // IDENTIFIERS
    "identifier_doi": "",
    "identifier_eisbn": "",
    "identifier_eissn": "",
    "identifier_isbn10": "",
    "identifier_isbn13": "",
    "identifier_issn": "",
    "identifier_pmid": "",
    "identifier_pii": "",
    "identifier_pubs_identifier": "",
    "identifier_uuid": "",
    "identifier_source_identifier": "",
    "identifier_tombstone_record_identifier": "",

    // OPEN ACCESS ADMIN FIELDS
    "apc_admin_apc_review_status": "",
    "apc_admin_apc_spreadsheet_identifier": "",
    "apc_admin_apc_number": "",
    "ref_exception_required": "",
    "ref_other_exception_note": "",
    "ref_compliant_at_deposit": "",
    "ref_compliant_availability": "",

    // PATENT_FIELDS
    "patent_awarded_date": "",
    "patent_application_number": "",
    "patent_cooperative_classification": "",
    "patent_european_classification": "",
    "patent_filed_date": "",
    "patent_international_classification": "",
    "patent_number": "",
    "patent_status": "",
    "patent_territory": "",

    // PHYSICAL_ITEM_FIELDS
    "collection_name": "",
    "physical_dimensions": "",
    "physical_form": "",
    "physical_location": "",

    // RIGHTS_FIELDS
    "licence": "",
    "licence_start_date": "",
    "licence_statement": "",
    "licence_url": "",
    "rights_copyright_date": "",
    "rights_holders": "",
    "rights_statement": "",
    "rights_third_party_copyright_material": "",


    // THESIS_FIELDS = {
    "thesis_degree_institution": "",
    "thesis_degree_level": "",
    "thesis_degree_name": ""
};